import React from "react";
import ShoppingList from "./components/ShoppingList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MailList from "./components/MailList";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mailList" Component={MailList}></Route>
        <Route path="/shoppingList" Component={ShoppingList}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
