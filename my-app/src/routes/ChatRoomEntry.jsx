import "../App.css";
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import game from '../images/game.png';
import { Link } from "react-router-dom";

const ChatRoomEntry = () => {

    const [user, setUser] = useState(getAuth());

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    if (user == null) { window.location.pathname = "/" }
    return (
        <div>
            <div>Choose your game
                <div style={{display:"inline-flex"}}>
                    <div class="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} class="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div class="card-body">
                            <h5 class="card-title">Game 1</h5>
                            <p class="card-text ">Chat board for first team</p>
                            <p class="card-text text-light bg-dark">Date 09.01</p>
                            <Link to={{ pathname: "/chatRoomEntry/0" }}><button class="btn btn-primary">Entry</button></Link>
                        </div>
                    </div>
                    <div class="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} class="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div class="card-body">
                            <h5 class="card-title">Game 2</h5>
                            <p class="card-text ">Chat board for second team</p>
                            <p class="card-text text-light bg-dark">Date 09.01</p>
                            <Link to={{ pathname: "/chatRoomEntry/1" }}><button class="btn btn-primary">Entry</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatRoomEntry;