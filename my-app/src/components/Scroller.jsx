import React, { useState, useEffect } from 'react';


const Scroller = () => {

    const [scroll, setScroll] = useState();
    const [maxScroll, setMaxScroll] = useState();
    const [showScroll, setShow] = useState();

    useEffect(() => {
        if (scroll < maxScroll) {
            console.log("Olaa");
            setShow(
                React.createElement(
                    "button",
                    {
                        id: 'scrollClick', onClick: () => {
                            setScroll(document.getElementById("second").scrollTop = document.getElementById("second").scrollHeight)
                        }
                    },
                    `MOVE DOWN`
                ))
        }
        else {
            setShow(null)
        }
    }, [scroll, maxScroll])



    if (document.getElementById("second") !== null) {
        document.getElementById("second").addEventListener("touchstart", () => {
            setScroll(document.getElementById("second").scrollTop);
            setMaxScroll(Math.round((60 / 100) * document.getElementById("second").scrollHeight));
        });
    }



    return (
        <div>
            {showScroll}
        </div>
    )

}
export default Scroller;