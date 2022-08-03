import { signOut } from './firebase';

import '../App.css';

const Logout = () => {
  return (
    <div>
      <button className="btn btn-outline-danger btn-lg" onClick={signOut}>Sign Out !</button>
    </div>
  )
}

export default Logout;