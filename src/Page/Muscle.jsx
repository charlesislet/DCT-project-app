import React from "react";
import ReactCompareImage from 'react-compare-image';
import muscle1 from "../Image/C.jpg";
import muscle2 from "../Image/D.jpg";


const Muscle = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={muscle1} rightImage={muscle2}/>
        </div>
    )
}


export default Muscle;