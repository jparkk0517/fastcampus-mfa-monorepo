import Header from "./components/Header";
import Sns from "./components/Sns";
import MailList from "./components/MailList";
import ShoppingList from "./components/ShoppingList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App({ basename }) {
  return (
    <BrowserRouter basename={basename}>
      <>
        <Header />
        <Switch>
          <Route path="/mailList" component={MailList} />
          <Route path="/shoppingList" component={ShoppingList} />
          <Route path="/sns" component={Sns} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
