
import React from "react";
import HeaderProvider from "./Contexts/headerContext";
import Root from './router/Router';

function App() {
  return (
    <div>
      <HeaderProvider>
      <Root />
      </HeaderProvider>
    </div>
  );
}

export default App;
