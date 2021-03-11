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
      postalCode: "",
      city: "",
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
          birthDate: "",
          familySituation: "UNKNOWN",
          profession: "UNKNOWN",
          drivingLicenceObtainedDate: "",
          accompaniedDriving: "UNKNOWN",
          previousInsurance: {
            bonusMalus: 0,
            bonusSenorityYears: 0,
            insuranceSeniority: "UNKNOWN",
            interruptionInsuranceBegin: "2021-01-21T00:00:00+01:00",
            interruptionInsuranceEnd: "2021-01-21T00:00:00+01:00",
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
