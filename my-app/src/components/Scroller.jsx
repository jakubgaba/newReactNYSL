import { useState, useEffect } from 'react';


const Scroller = () => {


    const [scroll, setScroll] = useState();
    const [maxScroll, setMaxScroll] = useState();

    useEffect(() => {
        if(scroll < maxScroll){
            console.log("Olaa");
        }
    }, [scroll, maxScroll])

    if (document.getElementById("second") !== null) {
        document.getElementById("second").addEventListener("touchstart", () => {
            setScroll(document.getElementById("second").scrollTop);
            setMaxScroll(Math.round(document.getElementById("second").scrollHeight / 2));
        });

    }
}
export default Scroller;