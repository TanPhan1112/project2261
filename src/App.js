import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dogs from "./components/Dogs";

function App() {
  return (
    <Switch>
      <Route path={["/home", "/"]} component={Home} exact />
      <Route path="/dogs" component={Dogs} exact />
      {/* <Route path="/about" component={About} /> */}
      <Route component={Error} />
    </Switch>
  );
}

export default App;
