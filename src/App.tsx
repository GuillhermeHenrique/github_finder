//CSS
import classes from "./App.module.css";

//Icons
import { FaGithub } from "react-icons/fa";

//Routes
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.title}>
        <FaGithub className={classes.icon}/>
        <h1>GitHub Finder</h1>
      </div>
      <Outlet />
    </div>
  );
}

export default App;