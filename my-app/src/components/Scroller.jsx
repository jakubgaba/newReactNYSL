import React, { useState } from 'react';


const Scroller = () => {

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

    if (document.getElementById("second") !== null) {
        document.getElementById("second").addEventListener("touchstart", () => {
            if (Math.round((60 / 100) * document.getElementById("second").scrollHeight) > document.getElementById("second").scrollTop) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        });
    }



    return (
        <div>
            {scroll ? element : ""}
        </div>
    )

}
export default Scroller;