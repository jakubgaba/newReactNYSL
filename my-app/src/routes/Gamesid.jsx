
import React from "react";
import JSfetch from "../components/JSfetch";
import { useParams, useNavigate} from "react-router-dom";


export default function Gamesid() {
    const [loading, data, error] = JSfetch("../locations.json");
    let { location } = useParams();
    const navigate = useNavigate();

    if (loading) return "Loading ...";
    console.log(error);
    console.log(data.locationdata);
    let result;
    data.locationdata.every((item) => {
        if (item.location === location) {   
            console.log("Brah");
            result = item;
            return false;
        }
        else{
            return true;
        }
    })
    console.log(result);
    return (
        <main style={{ padding: "1rem" }}>
            <div>
                <iframe className="container-fluid border border-5 border border-info rounded-pill" src={result.url} width="600" height="450" title="map" loading="lazy"></iframe>
                <h1>{result.location}</h1>
                <h3 className="fw-light" >{result.address}</h3>
                <br/>
                <button onClick={()=>navigate(-1)} type="button" className="btn btn-outline-success">Go back</button>
            </div>
        </main>
    );
}

