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
      sraCode: "KA20020",
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
          accompaniedDriving: "",
          previousInsurance: {
            bonusMalus: 0,
            bonusSenorityYears: 0,
            insuranceSeniority: "UNKNOWN",
            interruptionInsuranceBegin: "",
            interruptionInsuranceEnd: "",
            insuranceMonths: 0,
            lastInsuranceName: "string",
            hasInsuranceTerminate: "UNKNOWN",
            terminateReason: "UNKNOWN",
            terminateBy: null,
          },
        },
      ],
    },
    desiredEffect: "",
    codeRBS: "SRYBVEW/+33665006574",
  });

  return (
    <PropositionContext.Provider value={{ proposition, setProposition }}>
      {children}
    </PropositionContext.Provider>
  );
};

export default PropositionProvider;

PropositionProvider.propTypes = childrenPropType;
