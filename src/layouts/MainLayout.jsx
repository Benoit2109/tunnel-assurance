import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Header from "./Header";

/** high order component receiving component */
const MainLayout = ({ component: Component, ...rest }) => {
  return (
    <main>
      <Header />
      <Route {...rest} component={Component} />
    </main>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
};
