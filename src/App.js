import { Outlet, useRoutes, NavLink } from 'react-router-dom';
import "./App.css";
import Games from "./routes/games";
import Gamesid from "./routes/Gamesid";


const App = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <div className="App">
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
            <div className="btn-group ">
              <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Scrool pages
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <NavLink to="/" className={({ isActive }) => isActive ? "activeStyle" : "nActiveStyle"}>Main</NavLink></li>
                <li className="dropdown-item">
                  <NavLink to="/games" className={({ isActive }) => isActive ? "activeStyle" : "nActiveStyle"}>Schedule</NavLink></li>
              </ul>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>,
      children: [
        {
          path: 'games',
          element: <Games />
        },
        {
          path: 'games/:location',
          element: <Gamesid />
        }
      ]
    }
  ]);
  return routes;
}
export default App;


