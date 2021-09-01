import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../component/Home";
import Layout from "../component/Layout/Layout";
import TicketAdd from "../component/TicketAdd";
import TicketDetail from "../component/TicketDetail";
import CriticsSuggestions from "../component/CriticsSuggestions";

const BasePage = () => {
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route path="/ticket/add" component={TicketAdd} />
                    <Route path="/ticket/detail" component={TicketDetail} />
                    <Route path="/criticsAndsuggestions" component={CriticsSuggestions} />
                    <Route path="/" component={Home} exact />
                </Layout>
            </Switch>
        </Router>
    )

}
export default BasePage;