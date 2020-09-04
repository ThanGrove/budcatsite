import React from "react";
import { Row, Col } from "react-bootstrap";

function Bibl(props) {
    const data = props.data;
    if (!data) { return null; }
    console.log(data);
    const ed = data.edition;
    return (
        <>
            <div id={'iddiv'}>
                <h2>Identification Information</h2>
                <ul>
                    <li>{field('Collection', data.collection)}</li>
                    <li>{field("Edition", `${ed.tibetan} (${ed.name}, ${ed.wylie})`)}</li>
                    <li>{field("Sigla", ed.sigla)}</li>
                </ul>
            </div>
        </>
    )
}

function field(label, val) {
    return (
        <>
            <span className={'label'}>{label}</span> <span className={'value'}>{val}</span>
        </>
    )
}


export default Bibl;