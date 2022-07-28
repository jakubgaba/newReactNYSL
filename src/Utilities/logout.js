import { signOut } from './firebase';

import '../App.css';

const Logout = () => {
  return (
    <div>
      <button className="button" onClick={signOut}><i className="fab fa-google"></i>Sign Out !</button>
    </div>
  )
}

export default Logout;