import React, { createContext, useState } from "react";
import childrenPropType from "../proptypes/ChildrenProptypes";

export const PropositionContext = createContext({
  propostion: {},
  setProposition: () => {},
});

PropositionContext.displayName = "PropositionContext";

const PropositionProvider = ({ children }) => {
  const [proposition, setProposition] = useState({
    vehicle: {
      gettingMode: "UNKNOWN",
      release: "2021-03-05T07:59:10.788Z",
      hasVehiculeInsuranceSinceGetting: "",
      endOfInsurance: "2021-03-05T07:59:10.788Z",
      fundingMode: "UNKNOWN",
      getting: "2021-03-05T07:59:10.788Z",
      sraCode: "FO08775",
      garageMode: "UNKNOWN",
      hasProtectionSystem: false,
      hasTrackingSystem: false,
      postalCode: "string",
      city: "string",
      price: 0,
      kmTraveled: 0,
      use: "UNKNOWN",
    },
    drivers: {
      driverGroupType: "UNKNOWN",
      grayCardOwnerType: "UNKNOWN",
      hasChildrenOccasionalDrivers: false,
      exclusiveCoupleDriving: false,
      drivers: [
        {
          roleOrder: "MAIN",
          sex: "UNKNOWN",
          birthDate: "2021-03-05T07:59:10.788Z",
          familySituation: "UNKNOWN",
          profession: "UNKNOWN",
          drivingLicenceObtainedDate: "2021-03-05T07:59:10.788Z",
          accompaniedDriving: false,
          previousInsurance: {
            bonusMalus: 0,
            bonusSenorityYears: 0,
            insuranceSeniority: "UNKNOWN",
            interruptionInsuranceBegin: "2021-03-05T07:59:10.788Z",
            interruptionInsuranceEnd: "2021-03-05T07:59:10.788Z",
            insuranceMonths: 0,
            lastInsuranceName: "string",
            hasInsuranceTerminate: "UNKNOWN",
            hasAlreadyInsuranceVSP: false,
            hasAlreadyInsuranceMoto: false,
            terminateReason: "UNKNOWN",
            terminateBy: "string",
          },
          disasters: [
            {
              disaster: "UNKNOWN",
              date: "2021-03-05T07:59:10.788Z",
              alcoholControl: 0,
              policeIntervention: true,
              pursuitType: "UNKNOWN",
              sanction: "UNKNOWN",
              suspensionDuration: "UNKNOWN",
            },
          ],
          offenses: [
            {
              date: "2021-03-05T07:59:10.788Z",
              offenseTypes: ["UNKNOWN"],
              sanction: "UNKNOWN",
              withdrawalDuration: "UNKNOWN",
              circumstance: "UNKNOWN",
              reasonAlcohol: "UNKNWON",
              alcoholRate: "UNKNWOM",
            },
          ],
        },
      ],
    },
    desiredEffect: "",
    codeRBS: "PYJWRNA/+33781297447",
  });

  return (
    <PropositionContext.Provider value={{ proposition, setProposition }}>
      {children}
    </PropositionContext.Provider>
  );
};

export default PropositionProvider;

PropositionProvider.propTypes = childrenPropType;
