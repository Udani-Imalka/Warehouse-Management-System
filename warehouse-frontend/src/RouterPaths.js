import { Component, React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/User/Login";

class RouterPaths extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        {/* <Route path="/supplier">
                <Supplier />
              </Route>
              <Route path="/purchaseOrderCart">
                <POCart />
              </Route>
              <Route path="/purchaseOrderList">
                <POList />
              </Route>
              <Route path="/user">
                <User />
              </Route>
              <Route path="/GRNList">
                <GRNList />
              </Route>
              <Route path="/GRNCart">
                <GRNCart />
              </Route>
              <Route path="/GRNinvoice">
                <Invoice />
              </Route> */}
              </Routes>
      </Router>
    );
  }
}

export default RouterPaths;
