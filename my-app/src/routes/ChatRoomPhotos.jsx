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
    const [snapshots, loading, error] = useObject(ref(dbRef, 'photos'), 'value');

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    if (user == null) { window.location.pathname = "/" }
    if (loading) return "Data are loading"
    if (error) return error.message

   
    const handleFile = async (evt) => {
        const file = evt.target.files[0];
        const photoNumber = Number(snapshots.child(game).size + 1);
        await saveImage(game, file, photoNumber, user, getActuallGame); 
        console.log("handleEvent triggered");
    };

    let items = Object.values(snapshots.val()[game]);
    var result = [];
    let itemList = [];

    items.sort((a, b) => {
        return a.timestamp - b.timestamp;
    });

    for (var i in items) {
        result.push([items[i]]);
    }

    result.forEach((item, index) => {
        itemList.push(
            <div key={index}>
                <div className='messageMaker'>
                    <div className='messageMakerProfile'>
                        <div>
                            {item[0].user} <span>{item[0].timestamp}</span>
                        </div>
                    </div>
                    <div className='messageMakerText'>
                        <img src={item[0].url} alt="Bild" width="100%" height="100%" onClick={() => {
                            window.open(item[0].url)
                        }}></img>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            <div>
            <div className='first' id="bla">
                <div id='second'>
                {itemList}
                </div>
                <div className="pictureChoice">
                <div className="pictureLabel">
                <label htmlFor="galleryPic" className="btn btn-secondary">Choose a picture from gallery</label>
                <input style={{ visibility: "hidden" }} id="galleryPic" name="galleryPic" type="file" accept="image/*" onChange={event => handleFile(event)}></input>
                </div>
                <div className="pictureLabel">
                <label htmlFor="cameraPic" className="btn btn-secondary">Choose a picture from camera </label>
                <input style={{ visibility: "hidden" }} id="cameraPic" name="cameraPic" type="file" accept="image/*" capture onChange={event => handleFile(event)}></input>
                </div>
                </div>
            </div>
            </div>
            <br></br>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Go back</button>
        </div>
    )
}
export default ChatRoomPhotos;