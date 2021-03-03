import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import RoadBScore from "../components/RoadBScore/RoadBScore";
import VehiculeCondition from "../components/Vehicule-Condition/vehiculeCondition";
import Financing from "../components/Financing/financing";
import VehiculeInfos from "../components/VehiculeInfos/vehiculeInfos";
import OwnedCar from "../components/OwnedCar/ownedCar";
import ActualVehicule from "../components/ActualVehicule/ActualVehicule";
import Domiciliation from "../components/Domiciliation/Domiciliation";
import Trajets from "../components/Trajets/Trajets";




const Root = () => (
    <Router>
        <Switch>
            <MainLayout exact path="/rbs" component={RoadBScore}/>
            <MainLayout exact path="/vehicule-condition" component={VehiculeCondition }/>
            <MainLayout exact path="/financing" component={Financing}/>
            <MainLayout exact path="/owned-car" component={OwnedCar}/>
            <MainLayout exact path="/select-vehicule" component={VehiculeInfos}/>
            <MainLayout exact path="/actual-vehicule" component={ActualVehicule}/>
            <MainLayout exact path="/domiciliation" component={Domiciliation}/>
            <MainLayout exact path="/trajets" component={Trajets}/>
        </Switch>
    </Router>
)

export default Root;