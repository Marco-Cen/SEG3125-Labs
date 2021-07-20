import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
// import { Element } from 'react-scroll'

import foregroundImg from './assets/titlePageForeground.png';
import leftForeBackImg from './assets/LeftForebackground.png';
import logo from './assets/FossilizedEngTrans.png';
import rightForeBackImg from './assets/RightForebackground.png';
// import bkgImage from './assets/titlePagebackground.jpeg';
// import bkgImage2 from './assets/titlePagebackground2.jpeg';
// import image3 from './assets/carnivoreFossilBkg1.jpeg';

import FindUsContent from './FindUs';


const Home = () => {

  return (

    // {/* BackDrop Faded Green Jurassic Leaves within 'parallax' styling class */}
    <div className="homeParallax">

      {/* Company Logo */}
      <div className="parallax__layer parallax__layer__4">
        <img src={logo} alt="Fossilized" style={{
          width: '500px'
        }} />
      </div>

      {/* Tropical Palm Tree (RIGHT long leaf in front) */}
      <div className="parallax__layer parallax__layer__2">
        <img src={rightForeBackImg} alt="image3" style={{
          height: '100vh',
          width: '1180px',
        }} />
      </div>

      {/* Tropical Palm Tree (LEFT long leaf in front) */}
      <div className="parallax__layer parallax__layer__5">
        <img src={leftForeBackImg} alt="image3" style={{
          height: '100vh',
          width: '1900px',
        }} />
      </div>


      {/* <div className="parallax__layer parallax__layer__0">
          <img src={bkgImage} alt="bkgImage" />
        </div> */}

      {/* <div className="parallax__layer parallax__layer__3">
          <img src={bkgImage2} alt="bkgImage2" />
        </div> */}

      {/* <div className="parallax__layer parallax__layer__5">
          <img src={image3} alt="bkgImage4" />
        </div> */}


      {/* Trees */}
      <div className="parallax__layer parallax__layer__6">
        <img src={foregroundImg} alt="foregroundImage" style={{
          height: '890px',
          width: '2257px',
        }} />
      </div>




      {/* After Home Page (DIRT) */}
      <div className="parallax__cover">

        <div> &nbsp; </div> <br /> <br />

        {/* <!-- FOOTER COMPANY TAG (FIND/CONTACT US SECTION) --> */}
        <FindUsContent />


      {/* Experimentatl: With 'react-scroll' lib and Nav.Link nav bar, able to redirect to specific point of page */}
        {/* <Element id='findusRedirect' name='example-destination'>
          // wrap your content in the Element from react-scroll so when click from nav bar goes to this part of page 
          <FindUsContent />
        </Element> */}


{/* Need to put own footer again, because THIS PAGE footer doesnt show up due to formatting */}
<footer style={{textAlign:'right', marginTop:'1%'}}>
                Designed by: MC
        </footer>

      </div>

    </div>

  );
}

export default Home;