import { useList } from 'react-firebase-hooks/database';
import { getDatabase, ref } from "firebase/database";
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
    console.log(textData);
    return (
        <div >
            <div className='h1'>WELCOME TO CHAT ROOM</div>
            {
            textData
            }
        </div>
    )
}
export default ChatRoom;