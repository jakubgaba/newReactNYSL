import { Outlet, useRoutes, NavLink } from 'react-router-dom';
import "./App.css";
import Games from "./routes/games";
import Gamesid from "./routes/Gamesid";
import Login from './Utilities/login';
import Logout from './Utilities/logout';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import Home from './routes/Home';
import ChatRoom from './routes/ChatRoom';
const App = () => {

  const [user, setUser] = useState(null);
  const [hide, setHide] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
    if (user !== null) {
      setTimeout(() => {
        setHide(document.getElementById("loggedIn").style.padding = "0px");
        setTimeout(() => {
          setHide(document.getElementById("loggedIn").style.display = "none");
        }, 2000);
      }, 2000);
    }
  }, [user])
  console.log("Hide element activated: " + hide);


  let routes = useRoutes([
    {
      path: '/',
      element:
        <div className="App">
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
                  {user ? <li className="dropdown-item">
                    <NavLink to="/chatRoom" className={({ isActive }) => isActive ? "activeStyle" : "nActiveStyle"}>Chat room</NavLink></li>
                    :
                    ""}
                </ul>
              </div>
              {user ? <Logout /> : <Login />}
              {user ?
                <div style={{ marginTop: "5%" }}>
                  <div className="alert alert-success" id='loggedIn' role="alert">
                    You are logged in!
                  </div>
                  <div className="Welcome">
                    <img src={user.photoURL} alt="Google"></img>
                  </div>
                </div>
                : <div style={{ marginTop: "5%" }} className="alert alert-danger" role="alert">
                  You are not logged in !
                </div>}
            </nav>
            <br></br>
            <Outlet />
          </div>
          <footer id="sticky-footer" className="py-1 fixed-bottom bg-secondary text-white-50 w-100">
            <div className="container text-center">
              <small>Copyright &copy; NYSL </small>
            </div>
          </footer>
        </div>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'games',
          element: <Games />

        },
        {
          path: 'games/:location',
          element: <Gamesid />
        },
        {
          path: 'ChatRoom',
          element: <ChatRoom />
        }
      ]
    }
  ]);
  return routes;
}
export default App;


