import React from "react";
import ShoppingList from "./components/ShoppingList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MailList from "./components/MailList";
import Header from "./components/Header";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
