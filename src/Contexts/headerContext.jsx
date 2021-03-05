import React, { createContext, useState } from 'react';
import childrenPropType from '../proptypes/ChildrenProptypes';

export const HeaderContext = createContext({
  header: {},
  setHeader: () => {},
});

HeaderContext.displayName = 'HeaderContext';

const HeaderProvider = ({ children }) => {
  const [header, setHeader] = useState({
      path:"",
      title:"",
  });

  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;

HeaderProvider.propTypes = childrenPropType;