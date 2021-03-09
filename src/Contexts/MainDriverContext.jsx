import React, { createContext, useState } from "react";
import childrenPropType from "../proptypes/ChildrenProptypes";

export const MainDriverContext = createContext({
  mainDriver: {},
  setMainDriver: () => {},
});

MainDriverContext.displayName = "MainDriverContext";

const MainDriverProvider = ({ children }) => {
  const [mainDriver, setMainDriver] = useState(
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
    <MainDriverContext.Provider value={{ mainDriver, setMainDriver }}>
      {children}
    </MainDriverContext.Provider>
  );
};

export default MainDriverProvider;

MainDriverProvider.propTypes = childrenPropType;
