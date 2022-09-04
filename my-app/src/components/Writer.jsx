import "../App.css";
import { getDatabase, ref, update } from "firebase/database";

const Writer = (props) => {

    function writeUserData() {
        const db = getDatabase();
        update(ref(db, 'messages/game_3'),{
            username: "olaas",
        });
    }
    function showMe() {
        console.log(props.message.value);
        writeUserData("Ola");
    }

    return (
        <button onClick={() => showMe()} className="btn btn-outline-primary" type="button" id="button-addon2" >Send</button>
    )
}
export default Writer;