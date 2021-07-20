import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
// import bkgImage from './assets/titlePagebackground.jpeg';
// import bkgImage2 from './assets/titlePagebackground2.jpeg';
import image3 from './assets/homeBkgImage.jpeg';
// import image4 from './assets/carnivoreFossilBkg1.jpeg';
import foregroundImg from './assets/titlePageForeground.png';
import logo from './assets/FossilizedEngTrans.png';

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

        {/* Company Logo */}
        <div class="parallax__layer parallax__layer__4">
          <img src={logo} alt="Fossilized" style={{ 
            width:'500px'
            }} />
        </div>
        
        {/* Trees */}
        <div class="parallax__layer parallax__layer__6">
          <img src={foregroundImg} alt="foregroundImage" style={{ 
            height:'890px',
            width: '2257px',
            }}/>
        </div>

        {/* BackDrop Green Jurassic Leaves */}
        {/* <div class="parallax__layer parallax__layer__2">
          <img src={image3} alt="image3" style={{ 
            height:'100vh',
            width: '900px',
            }}/>
        </div> */}

        {/* <div class="parallax__layer parallax__layer__0">
          <img src={bkgImage} alt="bkgImage" />
        </div> */}
        
        {/* <div class="parallax__layer parallax__layer__3">
          <img src={bkgImage2} alt="bkgImage2" />
        </div> */}

        {/* <div class="parallax__layer parallax__layer__5">
          <img src={image4} alt="bkgImage4" />
        </div> */}

        

        
        <div class="parallax__cover"> 
        
        About Us
        
        </div>

        
      </div>


     );
}
 
export default Home;