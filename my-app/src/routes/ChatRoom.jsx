import { useList } from 'react-firebase-hooks/database';
import { getDatabase, ref } from "firebase/database";
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";




const ChatRoom = () => {
    const dbRef = getDatabase();
    const [snapshots, loading, error] = useList(ref(dbRef, 'messages'), 'value');
    const navigate = useNavigate();
    let { game } = useParams();



    let textData = "";
    
    // snapshots.map(snapshot => (
    //     snapshot.forEach(childSnap => {
    //         textData.push(
    //             childSnap.val()
    //         );
    //     })
    // ))
    console.log(Number(game));
    if (loading) return "Data are loading"
    if (error) return error.message
    return (
        <div>
            <div className='first'>
                <div className='second'>
                   
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bladddd</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                    <div>Bla</div>
                </div>

            </div>
            <br></br>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Go back</button>
        </div>
    )
}
export default ChatRoom;