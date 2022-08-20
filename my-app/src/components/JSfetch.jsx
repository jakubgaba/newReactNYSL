import { useEffect, useState } from "react";
import "../App.css";


export default function JSfetch(setURL) {
    const [data, setData] = useState();
    const [error, setError] = useState("*** No errors ***");
    const [loading, setLoading] = useState(true);
    try {
        useEffect(() => {
            const fetchIt = async () => {
                const response = await fetch(setURL);
                if (!response.ok) throw response;
                const json = await response.json();
                setData(json);
                setLoading(false);
            }
            fetchIt();
        }, [setURL]);
    }
    catch (e) {
        setError(console.error(e));
    }
    finally{
        console.log("*** Fetching data ***");
    }

    return [loading, data, error];

}