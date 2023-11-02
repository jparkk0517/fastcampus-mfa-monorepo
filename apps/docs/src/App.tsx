import React from "react";
import MailList from "./components/MailList";
import ShoppingList from "./components/ShoppingList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Web from "./components/Web";
import Sns from "./components/Sns";
import Legacy from "./components/Legacy";

interface AppProps {
  basename: string;
}

function App({ basename }: AppProps): JSX.Element {
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/mailList" Component={MailList}></Route>
        <Route path="/shoppingList" Component={ShoppingList}></Route>
        <Route path="/sns" Component={Sns}></Route>
        <Route path="/web/*" Component={Web}></Route>
        <Route path="/legacy/*" Component={Legacy}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
