import React from "react";
import MainDriverProvider from "./Contexts/MainDriverContext";
import SecondDriverProvider from "./Contexts/SecondDriverContext";
import HeaderProvider from "./Contexts/headerContext";
import PropositionProvider from "./Contexts/PropositionContext";
import Root from "./router/Router";


function App() {
  return (
    <div>
      <PropositionProvider>
        <MainDriverProvider>
          <SecondDriverProvider>
          <HeaderProvider>
            <Root />
          </HeaderProvider>
          </SecondDriverProvider>
        </MainDriverProvider>
      </PropositionProvider>
    </div>
  );
}

export default App;
