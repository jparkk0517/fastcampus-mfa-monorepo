import React from "react";
import ShadowDOM from "./components/ShadowDOM";
import MailList from "./components/MailList";

function App(): JSX.Element {
  return (
    <div className="App">
      <ShadowDOM>
        <>
          <style>{`
        div {
          background-color:blue;
        }
      `}</style>
          <div style={{ height: 100, width: 100 }}>docs app</div>
          <MailList />
        </>
      </ShadowDOM>
    </div>
  );
}

export default App;
