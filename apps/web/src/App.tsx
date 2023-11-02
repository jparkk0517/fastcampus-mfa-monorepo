import React from "react";
import ShoppingList from "./components/ShoppingList";
import Button from "./components/Button";

function App(): JSX.Element {
  return (
    <div>
      web app
      <Button>확인</Button>
      <Button buttonType="cancel">취소</Button>
      <ShoppingList />
    </div>
  );
}

export default App;
