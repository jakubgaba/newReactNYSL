import { useObject } from 'react-firebase-hooks/database';
import { getDatabase, ref } from "firebase/database";
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";



const ChatRoom = () => {
    const dbRef = getDatabase();
    const [snapshots, loading, error] = useObject(ref(dbRef, 'messages'), 'value');
    const navigate = useNavigate();
    let { game } = useParams();



    
    // snapshots.map(snapshot => (
    //     snapshot.forEach(childSnap => {
    //         textData.push(
    //             childSnap.val()
    //         );
    //     })
    // ))

    // snapshots[0].val().forEach(function(user) {
    //     console.log(user);
    //   });

    console.log(Number(game));
    console.log(snapshots.val().game_1);
    if (loading) return "Data are loading"
    if (error) return error.message
    return (
        <div>
            <div className='first'>
                <div className='second'>
                   
                </div>

            </div>
            <br></br>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Go back</button>
        </div>
    )
}
export default ChatRoom;