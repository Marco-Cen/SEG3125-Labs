import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import locationIcon from './assets/locationIcon.png';
import phoneIcon from './assets/phoneIcon.png';
import mailIcon from './assets/mailIcon.png';
import YTIcon from './assets/youtubeIcon.png';


const FindUsSection = () => {
    return (
        <div className="findUs">
            <Row>

                {/* LEFT SIDE */}
                <Col style={{ //centers weekday-weekend time in column
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    <h2 style={{
                        position: 'absolute',
                        left: '8%',
                        top: '8%',
                    }}>
                        HOURS </h2>

                    {/* <img src="assets/hoursIcon.png" alt="hoursIcon" style="position: relative; left:35%;"> </img> */}

                    <Row>
                        <Col>
                            <h3> Weekday:</h3>
                            <b> MONDAY </b>
                            <p> &nbsp; OPEN 24 Hours </p>

                            <b> TUESDAY </b> <br />
                            <p> &nbsp; OPEN 24 Hours </p>

                            <b> WEDNESDAY </b> <br />
                            <p> &nbsp; OPEN 24 Hours </p>

                            <b> THURSDAY </b> <br />
                            <p> &nbsp; OPEN 24 Hours </p>

                            <b> FRIDAY </b> <br />
                            <p> &nbsp; OPEN 24 Hours </p>
                        </Col>

                        <Col>
                            <Row>
                                <h3> Weekend:</h3>
                                <b> SATURDAY </b> <br />
                                <p> &nbsp; OPEN 24 Hours </p>

                                <b> SUNDAY </b> <br />
                                <p> &nbsp; CLOSED </p>
                            </Row>
                        </Col>
                    </Row>

                </Col>


                {/* MIDDLE */}
                <Col xs={6}>

                    <br />

                    <h1> FIND US </h1>

                    <br />
                    <Image src={locationIcon} alt="locationIcon" rounded />

                    <br />

                    <Link to={{ pathname: "https://www.google.com/maps?ll=45.423106,-75.683133&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=1768324499397139374" }} target="_blank"
                        style={{
                            color: 'wheat'
                        }}>
                        75 Laurier Ave. E, Ottawa, Ontario K1N 6N5, Canada
                    </Link>

                    <br />

                    {/* <!-- Google Maps Canvas Display --> */}
                    {/* (Need to modify size of 'mapouter' and 'gmap_canvas' accordingly to match size inside '<iframe>' in order to change size of map display) */}
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe title="FossilizedMuseum" width="600" height="700" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=university%20of%20ottawa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>

                </Col>


                {/* RIGHT */}
                <Col style={{ //centers weekday-weekend time in column
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    <h2 style={{ right: '6%' }}>CONTACT US </h2>

                    <Row>
                        <p>
                            <Image src={phoneIcon} alt="phoneIcon" rounded /> :
                            <Link to="tel:6479373188" style={{ color: 'white', fontSize: '125%' }}> (647) 937-3188 </Link>
                        </p>

                        <p>
                            <Image src={mailIcon} alt="emailIcon" rounded /> :
                            <Link to="mailto: marco.c3n@gmail.com" class="mailto" style={{ color: 'white', fontSize: '125%' }}> support@fossilizedmuseum.ca </Link>
                        </p>

                        <p>
                            <Image src={YTIcon} alt="YTIcon" rounded /> :
                            <Link to={{ pathname:"https://youtu.be/dQw4w9WgXcQ"}} target="_blank" style={{ color: 'white', fontSize: '125%' }}> YouTube Channel </Link>
                        </p>
                    </Row>

                </Col>

            </Row>
        </div>
    );
}

export default FindUsSection;