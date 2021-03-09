import React, { createContext, useState } from "react";
import childrenPropType from "../proptypes/ChildrenProptypes";

export const SecondDriverContext = createContext({
  secondDriver: {},
  setSecondDriver: () => {},
});

SecondDriverContext.displayName = "SecondDriverContext";

const SecondDriverProvider = ({ children }) => {
  const [secondDriver, setSecondDriver] = useState(
    {
      sex: "",
      firstname: "",
      name: "",
      birthDate:"",
      telephone: "",
      email: "",
      address: "",
      zip_code: "",
      city: "",
      familySituation: "",
      profession: "",
    },
   );

  return (
    <SecondDriverContext.Provider value={{ secondDriver, setSecondDriver }}>
      {children}
    </SecondDriverContext.Provider>
  );
};

export default SecondDriverProvider;

SecondDriverProvider.propTypes = childrenPropType;
