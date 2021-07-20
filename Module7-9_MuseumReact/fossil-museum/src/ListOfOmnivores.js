import React, {useState} from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import {Collapse, ListGroup, Button } from 'react-bootstrap';

/* NOTE:
- Encapsulate List Of Dinosaurs in Toggle Button
(Same as 'List of Carnivores.js': ONLY DIFFERENCE IS LIST of dinos)
*/
function OmnivoreDinoList() {
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
                <ListGroup.Item variant="dark"> Eoraptor </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Gallimimus </ListGroup.Item>

                <ListGroup.Item variant="dark"> Gigantoraptor </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Heterodontosaurus </ListGroup.Item>

                <ListGroup.Item variant="dark"> Lesothosaurus </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Ornithomimus </ListGroup.Item>

                <ListGroup.Item variant="dark"> Oviraptor </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Pelecanimimus </ListGroup.Item>

                <ListGroup.Item variant="dark"> Struthiomimus </ListGroup.Item>
                <ListGroup.Item variant="secondary"> Therizinosaurus </ListGroup.Item>
            </ListGroup>

          </div>
        </Collapse>

      </div>
    );
  }
  
  export default OmnivoreDinoList;