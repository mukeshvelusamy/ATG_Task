import React from 'react';
import logo from '../image/logo.PNG';

export default function Navbar() {
  return (
    <div className='container-fluid'>
      <style>
        {`
          .searchinput {
            border-top-left-radius: 100px,
            color:red
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-expand-md ">
        <div className="container-fluid">
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src={logo}
              height="40"
              alt=" Logo"
              style={{ marginTop: '-1px' }}
            />
          </a>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="sidebar offcanvas offcanvas-end" id="offcanvasNavbar">
            <div className="offcanvas-header text-white border-bottom">
              <button
                type="button"
                className="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="input-group ms-auto text-center" style={{ width: '400px' }}>
                <div className="input-group-append">
                  <button className="btn btn-secondary rounded-0 border-1 border-secondary" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <input type="text" className="form-control searchinput" placeholder="Search for your favourite groups in ATG" />
              </div>
              <ul className="navbar-nav justify-content-end ms-auto ps-3">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Create account.<span style={{ color: 'blue' }} data-toggle="modal" data-target="#exampleModalCenter">It's free!</span><i className="fa-sharp fa-solid fa-arrow-down fa-sm"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className='m-0'></hr>
    </div>
  );
}
