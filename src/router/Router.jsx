import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import RoadBScore from "../components/RoadBScore/RoadBScore";
import VehiculeCondition from "../components/Vehicule-Condition/vehiculeCondition";
import Financing from "../components/Financing/financing";
import VehiculeInfos from "../components/VehiculeInfos/vehiculeInfos";


const Root = () => (
    <Router>
        <Switch>
            <MainLayout exact path="/rbs" component={RoadBScore}/>
            <MainLayout exact path="/vehicule-condition" component={VehiculeCondition }/>
            <MainLayout exact path="/financing" component={Financing}/>
            <MainLayout exact path="/select-vehicule" component={VehiculeInfos}/>
        </Switch>
    </Router>
)

export default Root;