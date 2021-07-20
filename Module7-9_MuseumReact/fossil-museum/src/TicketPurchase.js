import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)

import { Image } from 'react-bootstrap';
import ticketIcon from './assets/newTicketIcon.png';


const TicketPurchaseForm = () => {
    return ( 
        <div className="ticketClass">


            {/* Parallax Scroll 1 */}
            <div className="topTeethBkg">

                <div className="subTitles">
                    <Image src={ticketIcon} alt="ticketIcon" rounded  style={{height:'100%'}} />
                    <h1 style={{fontSize:'400%'}}> TICKET PURCHASE </h1>
                </div>


                {/* <div className="ticketForm">
                </div> */}


            </div>


            {/* Parallax Scroll 2 */}
            <div className="middleTeethBkg">


                {/* <div className="fossilInfoCard">
                    <h1> HERBIVORE </h1>
                    <p 
                    style={{textAlign:'center', opacity:'0.7'}}>  her·​bi·​vore
                    <br/>
                    <i style={{opacity:'0.6'}}> (noun) </i> Animal that feeds on plants 
                    </p>

                    <div> &nbsp; </div> 

                    <iframe width="360vw;" height="350" src="https://www.youtube.com/embed/gr2ZL70nCjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <HerbivoreList /> 
                </div> */}

            </div>


            {/* Parallax Scroll 3 */}
            <div className="bottomTeethBkg">


                {/* <div className="fossilInfoCard" style={{right:'0%'}}>
                    <h1> OMNIVORE </h1>
                    <p 
                    style={{opacity:'0.7'}}>  om·​ni·​vore
                    <br/>
                    <i style={{opacity:'0.6'}}> (noun) </i> Animal that feeds on both meat & plants 
                    </p>

                    <div> &nbsp; </div> 
                    
                    <iframe width="420" height="323" src="https://www.youtube.com/embed/NMAQCzL0v1k?start=173" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                    
                    <div> &nbsp; </div> 
                    <OmnivoreList /> 
                </div> */}

            </div>


            <div> &nbsp; </div> 

        </div>
     );
}
 
export default TicketPurchaseForm;