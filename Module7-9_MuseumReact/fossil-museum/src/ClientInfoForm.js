import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import { Image, Form, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import accountIcon from './assets/account.png';
import mailIcon from './assets/mailBlack.png';
import phoneIcon from './assets/phoneBlack.png';


const ClientInfo = () => {
    return (
        <div className='ClientInfoSection'>

            {/* Padding gives space for FLOAT LABEL */}
            <Row style={{ paddingTop: '4%' }}>

                <Image src={accountIcon} alt="accountIcon" style={{height:'40px', width:'70px'}}/>

                <Col>
                    <Form.Group>
                        {/* Equivalent to <Input> */}
                        <Form.Control type="text" required > 
                        </Form.Control>

                        {/* BREAKS Floating Label So removed */}
                        {/* <Form.Control.Feedback>Looks good! </Form.Control.Feedback> */}
                        
                        <Form.Label className="form-control-placeholder" style={{ color: 'black'}}>
                            First Name
                        </Form.Label>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group>
                        <Form.Control type="text" required > 
                        </Form.Control>

                        <Form.Label className="form-control-placeholder" style={{ color: 'black'}}>
                            Last Name
                        </Form.Label>
                    </Form.Group>
                </Col>
            </Row>


            <Row style={{ paddingTop: '4%' }}>

            <Image src={mailIcon} alt="mailIcon" style={{height:'40px', width:'70px'}}/>
               
                <Col>
                <OverlayTrigger
                        key='bottom'
                        placement='bottom'
                        trigger='hover'
                        overlay={ //Tool Tip MESSAGE
                            <Tooltip id='tooltip-bottom'>
                                <p>  <i style={{ opacity: '0.5', fontSize:'80%' }}> 
                                    Accepted Email Address Formats: <br/>
                                    john@ourearth.com 
                                    john.cena@ourearth.org
                                    johncena@you.me.net
                                </i> </p>
                            </Tooltip>
                        }>
                    <Form.Group>
                        {/* Equivalent to <Input> */}
                        <Form.Control type="text" required > 
                        </Form.Control>

                        <Form.Label className="form-control-placeholder" style={{ color: 'black'}}>
                            Email Address
                        </Form.Label>
                    </Form.Group>
                </OverlayTrigger>
                </Col>
            </Row>


            <Row style={{ paddingTop: '4%' }}>

                <Image src={phoneIcon} alt="phoneIcon" style={{ height: '40px', width: '70px' }} />

                <Col>
                    <OverlayTrigger
                        key='bottom'
                        placement='bottom'
                        trigger='hover'
                        overlay={ //Tool Tip MESSAGE
                            <Tooltip id='tooltip-bottom'>
                                <p>  <i style={{ opacity: '0.5', fontSize: '80%' }}>
                                    Accepted Phone Number Format: <br />
                                    (123) 456-7890
                                    (123)456-7890
                                    123-456-7890
                                    1234567890
                                </i> </p>
                            </Tooltip>
                        }>
                        <Form.Group>
                            <Form.Control type="text" required >
                            </Form.Control>

                            <Form.Label className="form-control-placeholder" style={{ color: 'black' }}>
                                Phone Number
                            </Form.Label>
                        </Form.Group>
                    </OverlayTrigger>
                </Col>
            </Row>


        </div>

      );
}
 
export default ClientInfo;