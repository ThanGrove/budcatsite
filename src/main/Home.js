import React, { useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';

function Home(props) {
    return (
        <>
            <Row>
                <h2>Home is where the heart is!</h2>
                <p>This is the home page for the new catalog site. This is built in React and will get the information
                from a Flask web API and display it. Ornare mollit aliquip tempus alias luctus nisl, viverra commodo
                    harum suspendisse hendrerit, penatibus sociosqu hic eligendi, proin congue. Bibendum porttitor.</p>
            </Row>
            <Row>
                <Col>
                    Asperiores primis dignissimos impedit volutpat incididunt! Quam porta id etiam perferendis quaerat
                    necessitatibus congue lectus odit minim inceptos elementum? Excepteur dolorem, deserunt quam platea
                    fugit quasi senectus quas penatibus excepturi.
                </Col>
                <Col>
                    Mauris saepe iste nisl molestias lacus, sollicitudin? Phasellus? Libero! Proident magna pellentesque
                    inceptos integer accusamus repudiandae gravida iste egestas tortor tempus conubia tenetur ultricies.
                    Condimentum duis vestibulum error! Nisl soluta.
                </Col>
                <Col>
                    Dicta illum neque repellat ratione recusandae aliquid architecto mollitia, per repellat veniam?
                    Totam primis deleniti lorem esse cupidatat in fuga? Aenean, dolore, lectus nec, nostrud platea
                    eligendi erat accusamus libero.
                </Col>
            </Row>
        </>
    )
}

export default Home;