import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      // ADD HEADER
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.svg" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt="" height={17} />
                </span>
              </a>
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-light.svg" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height={19} />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
            {/* App Search*/}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-bell bx-tada" />
                <span className="badge bg-danger rounded-pill"></span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="/#"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1" />{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                  Henry
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a className="dropdown-item" href="/#">
                  <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                  <span key="t-profile">Profile</span>
                </a>
                <a className="dropdown-item" href="/#">
                  <i className="bx bx-wallet font-size-16 align-middle me-1" />{" "}
                  <span key="t-my-wallet">My Wallet</span>
                </a>
                <a className="dropdown-item d-block" href="/#">
                  <span className="badge bg-success float-end">11</span>
                  <i className="bx bx-wrench font-size-16 align-middle me-1" />{" "}
                  <span key="t-settings">Settings</span>
                </a>
                <a className="dropdown-item" href="/#">
                  <i className="bx bx-lock-open font-size-16 align-middle me-1" />{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-danger" href="/#">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
