import Home from "../Pages/Home";
import Contato from "../Pages/Contato";
import Test from "../Pages/Test";
import Projetos from "../Pages/Projetos";
import Sobre from "../Pages/Sobre";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Test />
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>
      <Route path="/projetos">
        <Projetos />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>
    </Switch>
  );
};

export default Routes;
