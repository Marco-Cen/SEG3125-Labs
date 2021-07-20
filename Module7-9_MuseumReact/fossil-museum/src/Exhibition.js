import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import ListGroup from 'react-bootstrap/ListGroup';
import CarnivoreList from './ListOfCarnivores';
import HerbivoreList from './ListOfHerbivores';
import OmnivoreList from './ListOfOmnivores';

const Exhibition  = () => {

    return (  
        <div className="exhibition">

            {/* Parallax Scroll 1 */}
            <div className="carnivoreFossilBkg">
                <div className="fossilInfoCard" style={{right:'0%'}}>

                    {/*  Title and Definition */}
                    <h1>  CARNIVORE   </h1> 
                    <p  
                    style={{opacity:'0.7'}}>  car·​ni·​vore 
                    <br/>
                    <i style={{opacity:'0.6'}}> (noun) </i> Animal that feeds on meat
                    </p>

                    {/* Empty Space */}
                    <div> &nbsp; </div> 
                    
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



                    {/* <h5 style={{ textAlign: 'left' }}> Dinosaures in our Museum: </h5>
                    <ListGroup>
                        <ListGroup.Item variant="dark">Allosaurus</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Deinonychus</ListGroup.Item>

                        <ListGroup.Item variant="dark">Dilophosaurus</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Giganotosaurus</ListGroup.Item>

                        <ListGroup.Item variant="dark">Megalosaurus</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Spinosaurus</ListGroup.Item>

                        <ListGroup.Item variant="dark">Spinosaurus</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Tyrannosaurus Rex</ListGroup.Item>

                        <ListGroup.Item variant="dark">Utahraptor</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Velociraptor</ListGroup.Item>
                    </ListGroup> */}