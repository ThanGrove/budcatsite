import React, { useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';

function Home(props) {
    return (
        <Col>
            <Row>
                <h2>About This Site</h2>
                <p>This new catalog site is a proof-of-concept on how to use an API provided by a custom Flask web
                app as the data source for a React SPA. The Flask API will feed the React SPA json that will get rendered
                by react.</p>
                <p>This project was inspired by the UCBT (Union Catalog of Buddhist Texts) project and their need for
                a good catalog site. The model of THL's catalogs was taken and reworked in this new updated technology.
                This is merely a proof-of-concept.</p>
            </Row>
        </Col>
    )
}

export default Home;