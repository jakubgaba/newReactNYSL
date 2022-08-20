import "../App.css";
import JSfetch from "../components/JSfetch";
import { Link } from "react-router-dom";

const LoadingButton = () => (
  <div className="spinner-border" style={{ width: "10rem", height: "10rem", marginTop: "50%", fontSize: "35px" }} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);
export default function games() {
  const [loading, data, error] = JSfetch("./gamesAll.json");
  let clicking = false;
  console.log(error);
  if (loading) return <LoadingButton />;
  return (
    <div className="Games" style={{ paddingTop: "30px" }}>
      <div id="trigger" style={{ marginTop: "25%" }}>
        <p className="d-grid gap-2">
          <button onClick={() => {
            if (clicking === false) {
              const clicker = document.getElementById("trigger");
              clicker.style.marginTop = "0%";
              clicking = true;
            }
            else {
              const clicker = document.getElementById("trigger");
              clicker.style.marginTop = "25%";
              clicking = false;
            }
          }
          }
            id="buttonMove" className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Show games
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
              *** 1 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_09_01_1"][0].date}<br />
                  Time : {data["2022_09_01_1"][0].time}<br />
                  Teams : {data["2022_09_01_1"][0].teams[0]} vs {data["2022_09_01_1"][0].teams[1]}<br />
                  Location : {data["2022_09_01_1"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_01_1"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace">
                  Date : {data["2022_09_01_1"][1].date}<br />
                  Time : {data["2022_09_01_1"][1].time}<br />
                  Teams : {data["2022_09_01_1"][1].teams[0]} vs {data["2022_09_01_1"][1].teams[1]}<br />
                  Location : {data["2022_09_01_1"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_01_1"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
              *** 2 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample2">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_09_08_2"][0].date}<br />
                  Time : {data["2022_09_08_2"][0].time}<br />
                  Teams : {data["2022_09_08_2"][0].teams[0]} vs {data["2022_09_08_2"][0].teams[1]}<br />
                  Location : {data["2022_09_08_2"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_08_2"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace ">
                  Date : {data["2022_09_08_2"][1].date}<br />
                  Time : {data["2022_09_08_2"][1].time}<br />
                  Teams : {data["2022_09_08_2"][1].teams[0]} vs {data["2022_09_08_2"][1].teams[1]}<br />
                  Location : {data["2022_09_08_2"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_08_2"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
              *** 3 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample3">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_09_15_3"][0].date}<br />
                  Time : {data["2022_09_15_3"][0].time}<br />
                  Teams : {data["2022_09_15_3"][0].teams[0]} vs {data["2022_09_15_3"][0].teams[1]}<br />
                  Location : {data["2022_09_15_3"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_15_3"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace ">
                  Date : {data["2022_09_15_3"][1].date}<br />
                  Time : {data["2022_09_15_3"][1].time}<br />
                  Teams : {data["2022_09_15_3"][1].teams[0]} vs {data["2022_09_15_3"][1].teams[1]}<br />
                  Location : {data["2022_09_15_3"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_15_3"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
              *** 4 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample4">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_09_22_4"][0].date}<br />
                  Time : {data["2022_09_22_4"][0].time}<br />
                  Teams : {data["2022_09_22_4"][0].teams[0]} vs {data["2022_09_22_4"][0].teams[1]}<br />
                  Location : {data["2022_09_22_4"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_22_4"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace ">
                  Date : {data["2022_09_22_4"][1].date}<br />
                  Time : {data["2022_09_22_4"][1].time}<br />
                  Teams : {data["2022_09_22_4"][1].teams[0]} vs {data["2022_09_22_4"][1].teams[1]}<br />
                  Location : {data["2022_09_22_4"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_09_22_4"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
              *** 5 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample5">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_10_06_5"][0].date}<br />
                  Time : {data["2022_10_06_5"][0].time}<br />
                  Teams : {data["2022_10_06_5"][0].teams[0]} vs {data["2022_10_06_5"][0].teams[1]}<br />
                  Location : {data["2022_10_06_5"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_06_5"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace ">
                  Date : {data["2022_10_06_5"][1].date}<br />
                  Time : {data["2022_10_06_5"][1].time}<br />
                  Teams : {data["2022_10_06_5"][1].teams[0]} vs {data["2022_10_06_5"][1].teams[1]}<br />
                  Location : {data["2022_10_06_5"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_06_5"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
              *** 6 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample6">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_10_13_6"][0].date}<br />
                  Time : {data["2022_10_13_6"][0].time}<br />
                  Teams : {data["2022_10_13_6"][0].teams[0]} vs {data["2022_10_13_6"][0].teams[1]}<br />
                  Location : {data["2022_10_13_6"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_13_6"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace ">
                  Date : {data["2022_10_13_6"][1].date}<br />
                  Time : {data["2022_10_13_6"][1].time}<br />
                  Teams : {data["2022_10_13_6"][1].teams[0]} vs {data["2022_10_13_6"][1].teams[1]}<br />
                  Location : {data["2022_10_13_6"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_13_6"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
              *** 7 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample7">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_10_20_7"][0].date}<br />
                  Time : {data["2022_10_20_7"][0].time}<br />
                  Teams : {data["2022_10_20_7"][0].teams[0]} vs {data["2022_10_20_7"][0].teams[1]}<br />
                  Location : {data["2022_10_20_7"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_20_7"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace ">
                  Date : {data["2022_10_20_7"][1].date}<br />
                  Time : {data["2022_10_20_7"][1].time}<br />
                  Teams : {data["2022_10_20_7"][1].teams[0]} vs {data["2022_10_20_7"][1].teams[1]}<br />
                  Location : {data["2022_10_20_7"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_20_7"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="d-grid gap-3">
              <button className="btn btn-secondary btn-info" data-bs-toggle="collapse" href="#collapseExample8" aria-expanded="false" aria-controls="collapseExample">
               *** 8 Game ***
              </button>
            </p>
            <div className="collapse" id="collapseExample8">
              <div className="card card-body">
                <p className="card-text font-monospace border-bottom">
                  Date : {data["2022_10_27_8"][0].date}<br />
                  Time : {data["2022_10_27_8"][0].time}<br />
                  Teams : {data["2022_10_27_8"][0].teams[0]} vs {data["2022_10_27_8"][0].teams[1]}<br />
                  Location : {data["2022_10_27_8"][0].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_27_8"][0].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
                <p className="card-text font-monospace ">
                  Date : {data["2022_10_27_8"][1].date}<br />
                  Time : {data["2022_10_27_8"][1].time}<br />
                  Teams : {data["2022_10_27_8"][1].teams[0]} vs {data["2022_10_27_8"][1].teams[1]}<br />
                  Location : {data["2022_10_27_8"][1].location}<br />
                  <Link to={{ pathname: "/games/" + data["2022_10_27_8"][1].location }} ><button type="button" className="btn btn-outline-info mb-2 mt-2">More details</button></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}