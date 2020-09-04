import React from "react";
import {field} from './Bibl';


function IdInfo(props) {
    const data = props.data;
    if (!data) {
        return null;
    }

    return (
        <div id={'iddiv'}>
            <h2>Identification Information</h2>
            <ul>
                <li>{field("Edition", <Edition ed={data.edition}/>)}</li>
                <li>{field("Text ID", <>{data.text_label}</>)}</li>
                <li>{field("Volumes", <Volumes vols={data.volumes}/>)}</li>
                <li></li>
            </ul>
        </div>
    );
}

export default IdInfo;


function Edition(props) {
    const ed = props.ed;
    return (
        <><span class="bo">{ed.tibetan}</span> ({ed.name}, {ed.wylie})</>
    );
}

function Volumes(props) {
    return (
        <>
            {
                props.vols.map((vol, index) => {
                    const comma = (index < props.vols.length -1) ? ', ' : '';
                    return <>{vol.number} (<span class="bo">{vol.tibetan}</span>; text {vol.num_in_vol}){comma}</>
                })
            }
        </>
    )
}
