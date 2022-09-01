import { useObject } from 'react-firebase-hooks/database';
import { getDatabase, ref } from "firebase/database";
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react';


const ChatRoom = () => {
    let { game } = useParams();
    const dbRef = getDatabase();
    const [snapshots, loading, error] = useObject(ref(dbRef, 'messages'), 'value');
    const navigate = useNavigate();

    if (loading) return "Data are loading"
    if (error) return error.message


    let items = snapshots.val()[game];   //messages.game_1
    var result = [];
    let itemList = [];


    for (var i in items)
        result.push([items[i]]);



    result.forEach((item, index) => {
        itemList.push(
            <div key={index}>
                <div className='messageMaker'>
                    <div className='messageMakerProfile'>
                        {item[0].user}
                    </div>
                    <div className='messageMakerText'>
                         {item[0].message}
                    </div>
                </div>
                {/* {item[0].user} */}
            </div>
        )
    })


    // console.log(snapshots.val()[game]);
    return (
        <div>
            <div className='first'>
                <div id='second'>
                    {itemList}
                </div>
                <div className='input-group'>
                    <input type="text" className="form-control chatMessanger" id="formGroupExampleInput" placeholder="Write a message"></input>
                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
                </div>
            </div>
            <br></br>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Go back</button>
        </div>
    )
}
export default ChatRoom;