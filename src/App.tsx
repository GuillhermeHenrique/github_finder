//CSS
import classes from "./App.module.css";

//Routes
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
