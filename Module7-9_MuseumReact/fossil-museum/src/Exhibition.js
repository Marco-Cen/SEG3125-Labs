import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import CarnivoreList from './ListOfCarnivores';
import HerbivoreList from './ListOfHerbivores';
import OmnivoreList from './ListOfOmnivores';

import { Image } from 'react-bootstrap';
import exhibitionIcon from './assets/exhibitionIcon.png';


const Exhibition  = () => {

    return (  
        <div className="exhibition">

            {/* Parallax Scroll 1 */}
            <div className="carnivoreFossilBkg">

                <div className="subTitles">
                    <Image src={exhibitionIcon} alt="exhibitionIcon" rounded  style={{height:'100%'}} />
                    <h1 style={{fontSize:'400%'}}> EXHIBITION </h1>
                </div>

                <div className="fossilInfoCard" style={{right:'0%'}}>

                    {/*  Title and Definition */}
                    <br />
                    <h1>  CARNIVORE   </h1> 
                    <p  
                    style={{opacity:'0.7'}}>  car·​ni·​vore 
                    <br/>
                    <i style={{opacity:'0.6'}}> (noun) </i> Animal that feeds on meat
                    </p>
                    
                    {/* Video */}
                    <iframe width="400" height="345" src="https://www.youtube.com/embed/jIjIoAuNFNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   
            
                    {/* List of Dinosaurs */}
                    <CarnivoreList /> 

                </div>
            </div>

            <br/>

            <div className="herbivoreBkg">
                <div className="fossilInfoCard">

                    {/*  Title and Definition */}
                    <h1> HERBIVORE </h1>
                    <p 
                    style={{textAlign:'center', opacity:'0.7'}}>  her·​bi·​vore
                    <br/>
                    <i style={{opacity:'0.6'}}> (noun) </i> Animal that feeds on plants 
                    </p>

                    {/* Empty Space */}
                    <div> &nbsp; </div> 

                    {/* Video */}
                    <iframe width="360vw;" height="350" src="https://www.youtube.com/embed/gr2ZL70nCjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    {/* List of Dinosaurs */}
                    <HerbivoreList /> 


                </div>
            </div>

            <br/>

            <div className="omnivoreBkg">
                <div className="fossilInfoCard" style={{right:'0%'}}>
                    <h1> OMNIVORE </h1>
                    <p 
                    style={{opacity:'0.7'}}>  om·​ni·​vore
                    <br/>
                    <i style={{opacity:'0.6'}}> (noun) </i> Animal that feeds on both meat & plants 
                    </p>

                    {/* Empty Space */}
                    <div> &nbsp; </div> 
                    
                    {/* Video */}
                    <iframe width="420" height="323" src="https://www.youtube.com/embed/NMAQCzL0v1k?start=173" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                    
                    {/* List of Dinosaurs */}
                    <div> &nbsp; </div> 
                    <OmnivoreList /> 


                </div>
            </div>


            <div> &nbsp; </div> 

        </div>
    );
}
 
export default Exhibition;