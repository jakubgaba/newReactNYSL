import firebase from 'firebase/compat/app';
import "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import "../App.css";

const Home = () => {
    const [user, loading, error] = useAuthState(firebase.auth());

    if (error) return " Error: " + error.message

    return (
        <div >
            {console.log(user)}
            {user ?
                <div>
                    <div className="fs-1 text-decoration-underline" id='showEmYes'>Hello {user.displayName}</div>
                    <div className="display-1" id='generalInforamtion'>
                            <span className='a'>G</span>
                            <span className='b'>E</span>
                            <span className='c'>N</span>
                            <span className='d'>E</span>
                            <span className='e'>R</span>
                            <span className='f'>E</span>
                            <span className='g'>L</span>
                        </div>
                    </div>
                    :
                    <div id='showEmNo'>

                    </div>
            }
                </div>
    )
}
            export default Home;