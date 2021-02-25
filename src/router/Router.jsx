import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import RoadBScore from "../components/RoadBScore/RoadBScore";
import VehiculeCondition from "../components/Vehicule-Condition/vehiculeCondition";


const Root = () => (
    <Router>
        <Switch>
            <MainLayout exact path="/rbs" component={RoadBScore}/>
            <MainLayout exact path="/vehicule-condition" component={VehiculeCondition }/>
        </Switch>
    </Router>
)

export default Root;