import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import bkgImage from './assets/titlePagebackground.jpeg';
import bkgImage2 from './assets/titlePagebackground2.jpeg';
import image3 from './assets/backdrop.jpeg';
import image4 from './assets/fossil1Background.jpeg';
import foregroundImg from './assets/titlePageForeground.png';
import logo from './assets/FossilizedTransparent.png';

// <div style={{
//   // backgroundImage: `url(${bkgImage})`,
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   width: '100vw',
//   height: '100vh',
//   position: 'absolute',
//   zIndex: '2',
// }}>

const Home = () => {
    return ( 

      <div class="parallax">

        {/* Trees */}
        <div class="parallax__layer parallax__layer__6">
          <img src={foregroundImg} alt="foregroundImage" />
        </div>

        {/* BackDrop Green Jurassic Leaves */}
        <div class="parallax__layer parallax__layer__2">
          <img src={image3} alt="image3" />
        </div>

        {/* <div class="parallax__layer parallax__layer__0">
          <img src={bkgImage} alt="bkgImage" />
        </div> */}
        
        {/* <div class="parallax__layer parallax__layer__3">
          <img src={bkgImage2} alt="bkgImage2" />
        </div> */}

        {/* <div class="parallax__layer parallax__layer__5">
          <img src={image4} alt="bkgImage4" />
        </div> */}

        {/* Company Logo */}
        <div class="parallax__layer parallax__layer__4">
          <img src={logo} alt="Fossilized" style={{ 
            width:'500px'
            }} />
        </div>
        

        
        <div class="parallax__cover"> 
        
        About Us
        
        </div>

        
      </div>


     );
}
 
export default Home;