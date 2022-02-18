import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">© Skote.</div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Design &amp; Develop by Themesbrand
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
