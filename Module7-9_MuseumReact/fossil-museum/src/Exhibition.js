import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)


const Exhibition  = () => {
    return (  
        <div className="exhibition">

            {/* Parallax Scroll 1 */}
            <div className="dirtBkgImg">

                <div className="fossilInfoCard" style={{right:'0%'}}>

                    {/* Use States To move to 1 form to another */}
                    <h1> CARNIVORE </h1>

                </div>

            </div>



            <div className="fossil1Bkg">

                <div className="fossilInfoCard">

                    {/* Use States To move to 1 form to another */}
                    <h1> Form Fossilized2 </h1>

                </div>
            </div>


        </div>
    );
}
 
export default Exhibition;