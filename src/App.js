import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dogs from "./components/Dogs";
import DogsDetail from "./components/DogsDetail";
import Documentation from "./components/Documentation";
import ToDo from "./components/ToDo";

function App() {
  return (
    <Switch>
      <Route path={["/home", "/"]} component={Home} exact />
      <Route path="/dogs" component={Dogs} exact />
      <Route path="/dogsdetail" component={DogsDetail} exact />
      <Route path="/todo" component={ToDo} exact />
      <Route path="/documentation" component={Documentation} exact />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
