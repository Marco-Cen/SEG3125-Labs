import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import { Image, Form, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import accountIcon from './assets/account.png';
import ticketBoughtIcon from './assets/ticketBoughtIcon.png';
import ccNumIcon from './assets/ccNumIcon.png';
import ccDateIcon from './assets/ccDateIcon.png';
import ccCvvIcon from './assets/cvvIcon.png';


const ClientPayInfo = () => {
    return (
        <div className='ClientPay'>

            <Row style={{ paddingTop: '4%' }}>
                <Image src={ticketBoughtIcon} alt="ticketIcon" style={{ height: '40px', width: '70px' }} />
                <Col>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        trigger='hover'
                        overlay={ //Tool Tip MESSAGE
                            <Tooltip id='tooltip-right'>
                                <p>  <i style={{ opacity: '0.7', fontSize: '80%' }}>
                                    EACH TICKET COSTS $20 CAD
                                </i> </p>
                            </Tooltip>
                        }>
                        <Form.Group>
                            <Form.Control type="number" required>
                            </Form.Control>

                            <Form.Label className="form-control-placeholder" style={{ color: 'black' }}>
                                Ticket Amount
                            </Form.Label>
                        </Form.Group>
                    </OverlayTrigger>
                </Col>
            </Row>


            <Row style={{ paddingTop: '4%' }}>
                <Image src={accountIcon} alt="accountIcon" style={{ height: '40px', width: '70px' }} />
                <Col>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        trigger='hover'
                        overlay={ //Tool Tip MESSAGE
                            <Tooltip id='tooltip-right'>
                                <p>  <i style={{ opacity: '0.7', fontSize: '80%' }}>
                                    NAME on the FRONT of the card
                                </i> </p>
                            </Tooltip>
                        }>
                        <Form.Group>
                            <Form.Control type="text" required>
                            </Form.Control>

                            <Form.Label className="form-control-placeholder" style={{ color: 'black' }}>
                                Card Holder's Name
                            </Form.Label>
                        </Form.Group>
                    </OverlayTrigger>
                </Col>
            </Row>


            <Row style={{ paddingTop: '4%' }}>
                <Image src={ccNumIcon} alt="ccNum" style={{ height: '40px', width: '70px' }} />
                <Col>
                    <OverlayTrigger
                        key='right'
                        placement='right'
                        trigger='hover'
                        overlay={ //Tool Tip MESSAGE
                            <Tooltip id='tooltip-right'>
                                <p>  <i style={{ opacity: '0.7', fontSize: '80%' }}>
                                    NUMBER on the FRONT of the card <br />
                                    Accepted Format: <br />
                                    #### #### #### ####
                                </i> </p>
                            </Tooltip>
                        }>
                        <Form.Group>
                            <Form.Control type="number" maxlength="19"  required>
                            </Form.Control>

                            <Form.Label className="form-control-placeholder" style={{ color: 'black' }}>
                                Credit Card Number
                            </Form.Label>
                        </Form.Group>
                    </OverlayTrigger>
                </Col>
            </Row>



            <Row style={{ paddingTop: '4%' }}>
                <Image src={ccDateIcon} alt="ccDate" style={{ height: '40px', width: '70px' }} />
                <Col>
                    <OverlayTrigger
                        key='bottom'
                        placement='bottom'
                        trigger='hover'
                        overlay={ //Tool Tip MESSAGE
                            <Tooltip id='tooltip-bottom'>
                                <p>  <i style={{ opacity: '0.7', fontSize: '80%' }}>
                                    MONTH & YEAR on FRONT of card <br />
                                    Accepted Format:  <br />
                                    2/13   <br />
                                    02/13   <br />
                                    0213    <br />
                                </i> </p>
                            </Tooltip>
                        }>
                        <Form.Group>
                            <Form.Control type="number" maxlength="5"  required >
                            </Form.Control>

                            <Form.Label className="form-control-placeholder" style={{ color: 'black' }}>
                                Expiry Date
                            </Form.Label>

                        </Form.Group>
                    </OverlayTrigger>
                </Col>

                <Image src={ccCvvIcon} alt="ccCvv" style={{ height: '40px', width: '65px' }} />
                <Col>
                    <OverlayTrigger
                        key='bottom'
                        placement='bottom'
                        trigger='hover'
                        overlay={ //Tool Tip MESSAGE
                            <Tooltip id='tooltip-bottom'>
                                <p>  <i style={{ opacity: '0.7', fontSize: '80%' }}>
                                    3 DIGITS on the BACK of the card
                                </i> </p>
                            </Tooltip>
                        }>
                        <Form.Group>
                            <Form.Control type="number" maxlength="3"  required>
                            </Form.Control>

                            <Form.Label className="form-control-placeholder" style={{ color: 'black' }}>
                                CVV
                            </Form.Label>
                        </Form.Group>
                    </OverlayTrigger>
                </Col>
            </Row>

        </div>

    );
}

export default ClientPayInfo;