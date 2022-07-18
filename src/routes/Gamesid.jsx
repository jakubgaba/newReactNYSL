
import React from "react";
import JSfetch from "../components/JSfetch";



export default function Gamesid() {
    const [loading, data, error] = JSfetch("../locations.json");
    console.log(data);
    return (
        <main style={{ padding: "1rem" }}>
            <div>
                dsadas
            </div>
        </main>
    );
}