import React, {useState} from 'react'; //Bc downloaded bootstrap? (React-bootstrap)

// import logoEnglish from './assets/FossilizedEngTrans.png';
// import logoFrench from './assets/FossilizedFrenchTransparent.png';


/* NOTE:
- UNable to get working so manually input button in pages to translate
*/
const translateLanguageBttn = () => {

    // const [langButton, setLangButton] = useState(true);


    // const imagesPath = {
    //     englishLogo: {logoEnglish},
    //     frenchLogo: {logoFrench}      
    // }
    // this.state = {
    //     open: true
    //   }
    // const toggleImage = () => {
    //     this.setState(state => ({ open: !state.open }));
    //   }
    // this.getImageName = () => this.state.open ? 'englishLogo' : 'frenchLogo'
    // const imageName = this.getImageName();



    const[language, setLanguage] = useState('English');
    const handleClick = () => {
        setLanguage('textChanged Eng');
    }


    
    return (  
        <div className="translateToggle">


            <button onClick={handleClick}  style={{color:'black'}}> {language} </button>  




        </div>
    );
}
 
export default translateLanguageBttn;