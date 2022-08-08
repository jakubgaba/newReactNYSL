import firebase from 'firebase/compat/app';
import "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import "../App.css";

const Home = () => {
    const [user, loading, error] = useAuthState(firebase.auth());

    if (loading) return " Please wait page is loading ... "
    if (error) return " Error: " + error.message

    return (
        <div >
            {console.log(user)}
            {user ?
                <div>
                    <div className="fs-1 text-decoration-underline" id='showEmYes'>Hello {user.displayName}</div>

                </div>
                :
                <div id='showEmNo'>
                    Nothing is there
                </div>
            }
        </div>
    )
}
export default Home;