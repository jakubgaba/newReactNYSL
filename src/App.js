import { Outlet, NavLink } from "react-router-dom";
import "./App.css";



export default function App() {
  return (
    <div className="container text-center">
            <h1 className="display-1">NYSL</h1>
            <p className="display-5">Northside Youth Soccer League</p>
            <nav
              style={{
                textAlign: "center",
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
              }}
            >
              <div class="btn-group ">
                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Scrool pages
                </button>
                <ul class="dropdown-menu">
                  <li class="dropdown-item">
                    <NavLink to="/" className={({ isActive }) => isActive ? "activeStyle" : "nActiveStyle"}>Main</NavLink></li>
                  <li class="dropdown-item">
                    <NavLink to="/games" className={({ isActive }) => isActive ? "activeStyle" : "nActiveStyle"}>Schedule</NavLink></li>
                </ul>
              </div>
            </nav>
            <Outlet />
          </div>
  );
}


