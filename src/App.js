import { Fragment } from "react";
import "./App.css";
import NavigationBar from "./components/Navigation Bar/Navigation";

function App() {
  return (
    <Fragment>
      <NavigationBar
        name="go where"
        navlinks={[
          { title: "home", link: "/home" },
          { title: "about", link: "/about" },
          { title: "contact us", link: "/contact" },
        ]}
        getstarted={true}
        login={true}
      />
      {/* <h1>df</h1> */}
    </Fragment>
  );
}

export default App;
