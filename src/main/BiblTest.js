import React, { useState } from "react";
import UseApi from '../hooks/UseApi';
import { Row, Col, Button, Modal} from "react-bootstrap";
import Bibl from './Bibl'

function BiblTest(props) {
    const coll = props.coll;
    const ed = props.ed;
    const txt = props.text;

    //const qpath = `${coll}/${ed}/${txt}`;
    const qpath = 'http://127.0.0.1:5000/catalog/jsonp/kt/d/0001'
    const querySpecs = {
        path: qpath
    };

    const jsondata = UseApi('bibl', querySpecs);
    return (
        <>
            <Row>
                <h2>Catalog Section</h2>
                <Bibl data={jsondata} />
            </Row>
            <Row>
                <DataModal data={jsondata}/>
            </Row>
        </>
    )
}

export default BiblTest;


function DataModal(props) {
    const jsondata=props.data;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleOpen}>Json Data</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="jsondata"
            >
                <Modal.Header closeButton>
                    <Modal.Title>JSON Bibl Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <pre>
                        {JSON.stringify(jsondata, null, 4)}
                    </pre>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}



