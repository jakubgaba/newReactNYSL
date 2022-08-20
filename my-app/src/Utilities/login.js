import { signInWithGoogle } from './firebase';

import '../App.css';

const Login = () => {
  return (
    <div>
      <button className="btn btn-outline-success btn-lg" onClick={signInWithGoogle}>Sign in !</button>
    </div>
  )
}

export default Login;