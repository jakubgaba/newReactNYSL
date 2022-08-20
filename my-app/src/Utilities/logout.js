import { signOutaHere } from './firebase';

import '../App.css';

const Logout = () => {
  return (
    <div>
      <button className="btn btn-outline-danger btn-lg" onClick={signOutaHere}>Sign Out !</button>
    </div>
  )
}

export default Logout;