
import React from "react";
import HeaderProvider from "./Contexts/headerContext";
import PropositionProvider from "./Contexts/PropositionContext";
import Root from './router/Router';

function App() {
  return (
    <div>
      <PropositionProvider>
      <HeaderProvider>
      <Root />
      </HeaderProvider>
      </PropositionProvider>
    </div>
  );
}

export default App;
