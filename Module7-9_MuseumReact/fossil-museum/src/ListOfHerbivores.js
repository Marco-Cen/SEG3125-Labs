import React, {useState} from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import {Collapse, ListGroup, Button } from 'react-bootstrap';

/* NOTE:
- Encapsulate List Of Dinosaurs in Toggle Button
(Same as 'List of Carnivores.js': ONLY DIFFERENCE IS LIST of dinos)
*/
function HerbivoreDinoList() {
    const [open, setOpen] = useState(false);
    return (
      <div className="dinoNames">

        <Button onClick={() => setOpen(!open)}  aria-controls="dinosaurs-collapse-text" aria-expanded={open}
          style={{ 
              backgroundColor:'olive',
              borderColor:'white',
          }}>

            &#8595; In Our Museum &#8595;

        </Button>


        {/*  (ONLY DIFFERENCE) List of Dinos within Button */}
        <Collapse in={open}>
          <div id="dinosaurs-collapse-text">

            <ListGroup>
                <ListGroup.Item variant="dark"> Ankylosaurus </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Argentinosaurus </ListGroup.Item>

                <ListGroup.Item variant="dark"> Diplodocus </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Dracorex </ListGroup.Item>

                <ListGroup.Item variant="dark"> Edmontosaurus </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Hadrosaurus </ListGroup.Item>

                <ListGroup.Item variant="dark"> Moschops </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Nodosaurus </ListGroup.Item>

                <ListGroup.Item variant="dark"> Stegosaurus </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Triceratops </ListGroup.Item>
            </ListGroup>

          </div>
        </Collapse>

      </div>
    );
  }
  
  export default HerbivoreDinoList;