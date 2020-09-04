import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from "./Home";
import Catalog from "./Catalog";
import About from "./About";
import BiblTest from "./BiblTest";

function PageRouter(props) {
    return (
        <Container className="content">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/catalog" component={Catalog} />
                <Route path="/about" component={About} />
                <Route path="/bibl" component={BiblTest} />
            </Switch>
        </Container>
    )
}

export default PageRouter;