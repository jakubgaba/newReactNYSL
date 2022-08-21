import { useList } from 'react-firebase-hooks/database';
import { getDatabase, ref } from "firebase/database";
import "../App.css";
const ChatRoom = () => {
    const dbRef = getDatabase();
    const [snapshots, loading, error] = useList(ref(dbRef, 'messages'), 'value');

    if (loading) return "Data are loading"
    if (error) return error.message

    let textData = [];

    snapshots.map(snapshot => (
        snapshot.forEach(childSnap => {
        textData.push(
         childSnap.val()
         );
        })
    ))
    
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
                <div>Bla</div>
                <div>Bladddd</div>
                <div>Bla</div>
                <div>Bla</div>
                <div>Bla</div>
                <div>Bla</div>
                <div>Bla</div>
                </div>
            </div>
        </div>
    )
}
export default ChatRoom;