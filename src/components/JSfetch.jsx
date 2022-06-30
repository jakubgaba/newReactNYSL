import { useEffect, useState } from "react";
import "../App.css";


let Banner = ({title}) =>(
    <h1>{title}</h1>
);

export default function JSfetch() {
    const [data, setSchedule] = useState();

    useEffect(() => {
        const fetchIt = async () => {
            const response = await fetch("./gamesAll.json");
            if (!response.ok) throw response;
            const json = await response.json();
            setSchedule(json);
        }
        fetchIt();
    }, []);

    if (!data) return <h1>Loading schedule...</h1>;

    return (
        <div className="container">
            <Banner title={data.game1.date} />
            
        </div>
    );
}