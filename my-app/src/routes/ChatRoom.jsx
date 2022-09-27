import { useObject } from 'react-firebase-hooks/database';
import { getDatabase, ref } from "firebase/database";
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react';
import Writer from '../components/Writer'
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";




const ChatRoom = () => {
    let { game } = useParams();
    const dbRef = getDatabase();
    const [snapshots, loading, error] = useObject(ref(dbRef, 'messages'), 'value');
    const navigate = useNavigate();

    const [user, setUser] = useState(getAuth());

    const [scroll, setScroll] = useState(false);

    let element = React.createElement(
        "button",
        {
            id: 'scrollClick', onClick: () => {
                document.getElementById("second").scrollTop = document.getElementById("second").scrollHeight;
                setScroll(false);
            }
        },
        `MOVE DOWN`
    );

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    if (loading) return "Data are loading"
    if (error) return error.message


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
                        {item[0].message}
                    </div>
                </div>
            </div>
        )
    })


    if (user == null) { window.location.pathname = "/" }



    return (
        <div>
            <div className='first' id="bla">
                <div id='second'>
                    {itemList}
                </div>

                {
                    document.addEventListener('touchstart', () => {
                     if(document.location.pathname.includes("chatRoomEntry/game_")){
                        if ((Math.round((50 / 100) * document.getElementById("second").scrollHeight) > document.getElementById("second").scrollTop) && (document.getElementById("second").scrollTop >= 300))  {
                            setScroll(true);
                        }
                        else {
                            setScroll(false);
                        }
                    }
                    })
                }

                {scroll ? element : ""}

                <div className='input-group'>
                    <input type="text" className="form-control chatMessanger" id="formGroupExampleInput" placeholder="Write a message to the chat">
                    </input>
                    <Writer>Send</Writer>
                </div>
            </div>
            <br></br>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Go back</button>
        </div>
    )
}
export default ChatRoom;