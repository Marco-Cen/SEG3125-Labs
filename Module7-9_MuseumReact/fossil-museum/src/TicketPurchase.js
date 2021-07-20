import React, { useState } from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import ClientInfoSection from './ClientInfoForm';
import ClientPaySection from './ClientPayInfoForm';
import { Image, Accordion, Container, Card, Button, Form } from 'react-bootstrap';
import ticketIcon from './assets/newTicketIcon.png';



/* NOTES:
- Doesnt recognize 'FloatLabel' in react-bootstrap???! (Solution: manually made one)
*/



const TicketPurchaseForm = () => {

    //FOR INPUT VALIDATION
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    //For Toggle Language
    const [langButton, setLangButton] = useState(true);


    return (
        <div className="ticketClass">

            {/* Parallax Scroll 1 */}
            <div className="topTeethBkg">

                {/* Switch Implementation */}
                {/* <TranslateSwitch />  (wasnt able to get working in SEPARATE CLASS) */}
                <button onClick={() => setLangButton(!langButton)} style={{
                    color: 'black', borderColor: 'wheat'
                }}>
                    {langButton ? "Français" : "English"} </button>


                <div className="subTitles">
                    <Image src={ticketIcon} alt="ticketIcon" rounded style={{ height: '100%' }} />
                    <h1 style={{ fontSize: '400%' }}> {langButton ? "TICKET PURCHASE" : "ACHAT DE BILLETS"}  </h1>
                </div>

            </div>


            {/* Parallax Scroll 2 */}
            <div className="middleTeethBkg">

                <div className="ticketForm">

                    {/* <h1>  Title Text   </h1>  */}
                    <Container>
                        {/* Ticket Purchase Form */}
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Accordion defaultActiveKey="0" style={{ width: '100%' }}>

                                {/* First Section of Input Form */}
                                <Card >

                                    {/* Header */}
                                    <Accordion.Toggle as={Card.Header} eventKey="0" style={{
                                        cursor: 'pointer',
                                        backgroundColor: 'wheat',
                                        borderColor: 'black'
                                    }} >
                                        <h2>  [1] {langButton ? "Contact Information" : "Informations de Contact"} &#8595; </h2>
                                    </Accordion.Toggle>

                                    {/* Content */}
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>

                                            <ClientInfoSection />

                                        </Card.Body>

                                    </Accordion.Collapse>
                                </Card>


                                {/* Second Section of Input Form */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1" style={{
                                        cursor: 'pointer',
                                        backgroundColor: 'wheat',
                                        borderColor: 'black'
                                    }} >
                                        <h2>
                                            [2] {langButton ? "Payment Information" : "Informations de Paiement"}   &#8595;
                                        </h2>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>

                                            <ClientPaySection />

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <br />

                                <Button type="submit" style={{ backgroundColor: 'olive', borderColor: 'wheat' }}> {langButton ? "Submit" : "Soumettre"} </Button>

                            </Accordion>
                        </Form>
                    </Container>
                </div>
            </div>


            {/* Parallax Scroll 3 */}
            <div className="bottomTeethBkg">

            </div>

        </div>
    );
}

export default TicketPurchaseForm;