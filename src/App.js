import { Outlet, useRoutes, NavLink } from 'react-router-dom';
import "./App.css";
import Games from "./routes/games";
import Gamesid from "./routes/Gamesid";
import "firebase/auth";
import Login from './Utilities/login';
import Logout from './Utilities/logout';
import firebase from 'firebase/compat/app';
import { useState, useEffect } from 'react';


function fadeOut(){
  setTimeout(() => {
    const elem = document.getElementById("loggedIn");
    elem.style.padding = "0%";
  }, 2000);
}

const App = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])
  console.log(user);


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
            <div className="btn-group" style={{ paddingBottom: "10px" }}>
              <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Scrool pages
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <NavLink to="/" className={({ isActive }) => isActive ? "activeStyle" : "nActiveStyle"}>Main</NavLink></li>
                <li className="dropdown-item">
                  <NavLink to="/games" className={({ isActive }) => isActive ? "activeStyle" : "nActiveStyle"}>Schedule</NavLink></li>
                <li className="dropdown-item">
                </li>
              </ul>
            </div>
            {user ? <Logout /> : <Login />}
            {user ?
              <div>
                <div className="alert alert-success" id='loggedIn' role="alert">
                  You are logged in!
                  {fadeOut()}
                </div>
                <div className="Welcome">
                  <img src={user.photoURL} alt="userPhoto"></img>
                </div>
              </div>
              : <div className="alert alert-danger" role="alert">
                You are not logged in !
              </div>}
          </nav>
          <br></br>
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


