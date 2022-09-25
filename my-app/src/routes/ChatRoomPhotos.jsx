import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../App.css";
import { getDatabase, ref} from "firebase/database";
import { useObject } from 'react-firebase-hooks/database';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { saveImage } from '../Utilities/firebase'

const ChatRoomPhotos = () => {
    const navigate = useNavigate();
    let { game } = useParams();
    const [user, setUser] = useState(getAuth());
    let getActuallGame = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) + "/";
    const dbRef = getDatabase();
    const [snapshots] = useObject(ref(dbRef, 'photos/' + getActuallGame), 'value');

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    if (user == null) { window.location.pathname = "/" }



    const handleFile = async (evt) => {
        const file = evt.target.files[0];
        const photoNumber = Number(snapshots.size + 1);
        console.log(photoNumber);
        await saveImage(game, file, photoNumber, user, getActuallGame);
        console.log("handleEvent triggered");
    };

    return (
        <div>
            <div>
                <label htmlFor="galleryPic" className="btn btn-secondary">Choose a picture from gallery</label>
                <input style={{ visibility: "hidden" }} id="galleryPic" name="galleryPic" type="file" accept="image/*" onChange={event => handleFile(event)}></input>

                <br></br>
                <br></br>
                <label htmlFor="cameraPic" className="btn btn-secondary">Choose a picture from camera </label>
                <input style={{ visibility: "hidden" }} id="cameraPic" name="cameraPic" type="file" accept="image/*" capture onChange={event => handleFile(event)}></input>

                <div id="choosed">

                </div>
            </div>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Go back</button>
        </div>
    )
}
export default ChatRoomPhotos;