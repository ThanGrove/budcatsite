import React from "react";
import IdInfo from "./IdInfo";
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

function Bibl(props) {
    const data = props.data;
    if (!data) { return null; }

    return (
        <>
            <IdInfo data={data} />
        </>
    )
}

export function field(label, val) {
    return (
        <>
            <span className={'label'}>{label}</span> <span className={'value'}>{val}</span>
        </>
    )
}


export default Bibl;
