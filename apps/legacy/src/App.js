import Header from "./components/Header";
import Sns from "./components/Sns";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App({ basename }) {
  return (
    <BrowserRouter basename={basename}>
      <>
        <Header />
        <Switch>
          <Route path="/sns" component={Sns} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
