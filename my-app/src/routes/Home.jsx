import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../App.css";
import { useState, useEffect } from 'react';
const Home = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    return (
        <div >
            {
                user ?
                    <div className="loggedIn">
                        <div className="fs-1 text-decoration-underline" id='showEmYes'>Hello</div>
                    </div>
                    :
                    <div>You are not logged in</div>
            }
        </div>
    )
}
export default Home;