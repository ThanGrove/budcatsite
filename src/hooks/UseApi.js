
import { useQuery } from 'react-query';
import axios from 'axios';
import jsonpAdapter from '../logic/axios-jsonp';


const getApiJson = async (_, { query }) => {

    // http://127.0.0.1:5000/catalog/bibl/kt/d/0001
    console.log("query path: " + query.path);
    const apiurl = query.path;

    const request = {
        adapter: jsonpAdapter,
        callbackParamName: 'callback',
        url: apiurl,
    };
    const { data } = await axios.request(request);
    return data && data.response ? data.response : data;
};

function UseApi(qkey, queryobj) {
    const res = useQuery([qkey, { query: queryobj }], getApiJson);
    return res && res.data ? res.data : false;
}

export default UseApi;