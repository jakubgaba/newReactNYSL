import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../App.css";
import { useState, useEffect } from 'react';
import kids from '../images/kids.png';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    return (
        <div >
            {
                user ?
                    <div className="loggedIn">
                        <div>
                            
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item interval={5000}>
                                    <div>
                                        <img
                                            className="d-block w-100 border"
                                            src={kids}
                                            alt="One"
                                        />
                                        <Carousel.Caption>
                                            <h3 className="d-block bg-dark">Mission</h3>
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <div>
                                        <p className="border w-100" id="textCarousel">Support young athletes living in Chicago's northside neighborhoods,
                                            who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer,
                                            specifically those skills around team cooperation and good sportsmanship.</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <br></br>
                            <div className="border-bottom"></div>
                            <br></br>
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item interval={5000}>
                                    <div>
                                        <img
                                            className="d-block w-100 border"
                                            src={kids}
                                            alt="One"
                                        />
                                        <Carousel.Caption>
                                            <h3 className="d-block bg-dark">Vision</h3>
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <div>
                                        <p className="border w-100" id="textCarousel">The Northside Youth Soccer League aspires to develop strong,
                                            well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <br></br>
                            <div className="border-bottom"></div>
                            <br></br>
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item interval={5000}>
                                    <div>
                                        <img
                                            className="d-block w-100 border"
                                            src={kids}
                                            alt="One"
                                        />
                                        <Carousel.Caption>
                                            <h3 className="d-block bg-dark">General</h3>
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <div>
                                        <p className="border w-100" id="textCarousel">The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods.
                                            To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood.
                                            NYSL relies on the generous volunteer time of parents and previous league members.</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    :
                    <div>You are not logged in</div>
            }
        </div>
    )
}
export default Home;