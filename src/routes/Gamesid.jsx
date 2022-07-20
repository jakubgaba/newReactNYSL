
import React from "react";
import JSfetch from "../components/JSfetch";
import { useParams } from "react-router-dom";


export default function Gamesid() {
    const [loading, data, error] = JSfetch("../locations.json");
    console.log(data);
    let {location} = useParams();
    return (
        <main style={{ padding: "1rem" }}>
            <div>
                {location}
            </div>
        </main>
    );
}