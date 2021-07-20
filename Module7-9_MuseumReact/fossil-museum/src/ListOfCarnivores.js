import React, {useState} from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import {Collapse, ListGroup, Button } from 'react-bootstrap';

/* NOTE:
- Encapsulate List Of Dinosaurs in Toggle Button
*/
function CarnivoreDinoList() {
    const [open, setOpen] = useState(false);

    //-- Experimenting with outputting list --
    // const[dinosaurs, setDinosaurs] = useState([
    //     {title: 'Carnivores', id: 1},
    //     {title: 'Herbivores', id: 2},
    // ]);
  
    return (
      <div className="dinoNames">

          {/* Toggle Button */}
        <Button onClick={() => setOpen(!open)}  aria-controls="dinosaurs-collapse-text" aria-expanded={open}
          style={{ //Button Colour
              backgroundColor:'olive',
              borderColor:'white',
          }}>

                {/* //-- Experimenting with outputting list -- */}
                {/* {dinosaurs.map((dinosaur) => (
                        <div className="dynamicExhibitTitle" key={dinosaur.id}>
                            &#8595; {dinosaur.title} in Our Musuem &#8595;
                        </div> 
                    ))} */}

            &#8595; In Our Museum &#8595;

        </Button>


        {/* List of Dinos within Button */}
        <Collapse in={open}>
          <div id="dinosaurs-collapse-text">

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
            </ListGroup>

          </div>
        </Collapse>

      </div>
    );
  }
  
  export default CarnivoreDinoList;