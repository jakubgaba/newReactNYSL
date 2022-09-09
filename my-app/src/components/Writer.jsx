import "../App.css";
import { getDatabase, ref, update } from "firebase/database";
import { useObject } from 'react-firebase-hooks/database';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';

const Writer = () => {
    const dbRef = getDatabase();
    let getActuallGame = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) + "/";
    const [snapshots] = useObject(ref(dbRef, 'messages/' + getActuallGame), 'value');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    function writeUserData(location, text) {
        update(ref(dbRef, 'messages/' + getActuallGame + location), {
            message: text,
            timestamp: Date.now(),
            user: user.displayName

        });
    }

    

    function showMe() {
        if (document.getElementById("formGroupExampleInput").value !== "") {
            writeUserData("message_" + Number(snapshots.size + 1), document.getElementById("formGroupExampleInput").value);
            document.getElementById("formGroupExampleInput").value = "";    
              
        }
        else {
            alert("You need to write something");
            // document.getElementById("second").addEventListener("scroll", () => console.log("Div was scrolled"));
            
        }
    }

    return (
        <button onClick={() => showMe()} className="btn btn-outline-primary" type="button" id="button-addon2" >Send</button>
    )
}
export default Writer;