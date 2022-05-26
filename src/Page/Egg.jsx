import React from "react";
import ReactCompareImage from 'react-compare-image';
import egg1 from "../Image/K.png";
import egg2 from "../Image/L.png";


const Egg = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={egg1} rightImage={egg2}/>
        </div>
    )
}


export default Egg;