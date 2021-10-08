import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import accessories from "./Component/accessories";
import transaksi from "./Component/transaksi";
import Header from "./Master/header";
// import TemporaryDrawer from "./Master/sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// arrow function
const Routing = () => {
  return (
    <Router>
      <div>
        {/* <TemporaryDrawer />  */}
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/accessories" component={accessories} />
          <Route path="/transaksi" component={transaksi} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
