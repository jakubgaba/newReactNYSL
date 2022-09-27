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
            <div>
                <div className="chooseGameTeams">
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 1</h5>
                            <p className="card-text ">Chat board for first team</p>
                            <p className="card-text text-light bg-dark">Date 09.01</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_1" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }}>Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_1" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 2</h5>
                            <p className="card-text ">Chat board for second team</p>
                            <p className="card-text text-light bg-dark">Date 09.08</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_2" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }} >Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_2" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 3</h5>
                            <p className="card-text ">Chat board for third team</p>
                            <p className="card-text text-light bg-dark">Date 09.15</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_3" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }}>Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_3" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                </div>
                <div className="chooseGameTeams">
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 4</h5>
                            <p className="card-text ">Chat board for fourth team</p>
                            <p className="card-text text-light bg-dark">Date 09.22</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_4" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }}>Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_4" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 5</h5>
                            <p className="card-text ">Chat board for fifth team</p>
                            <p className="card-text text-light bg-dark">Date 10.06</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_5" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }}>Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_5" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 6</h5>
                            <p className="card-text ">Chat board for sixth team</p>
                            <p className="card-text text-light bg-dark">Date 10.13</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_6" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }}>Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_6" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                </div>
                <div className="chooseGameTeams">
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 7</h5>
                            <p className="card-text ">Chat board for seventh team</p>
                            <p className="card-text text-light bg-dark">Date 10.20</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_7" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }}>Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_7" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                    <div className="card my-1 bg-light" style={{ width: "50%" }}>
                        <img src={game} className="card-img-top w-50 mx-auto" alt="gameIMG" />
                        <div className="card-body">
                            <h5 className="card-title">Game 8</h5>
                            <p className="card-text ">Chat board for eight team</p>
                            <p className="card-text text-light bg-dark">Date 10.27</p>
                            <Link to={{ pathname: "/chatRoomEntry/game_8" }}><button className="btn btn-primary" style={{ marginBottom: "2px" }}>Entry chat</button></Link>
                            <br></br>
                            <Link to={{ pathname: "/chatRoomEntry/photos/game_8" }}><button className="btn btn-primary">Entry photo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatRoomEntry;