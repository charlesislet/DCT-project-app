import React from "react";
import ReactCompareImage from 'react-compare-image';
import muscle1 from "../Image/C.png";
import muscle2 from "../Image/D.png";


const Muscle = () => {
    return(
        <div className="w-[1000px] mx-auto">
            <ReactCompareImage leftImage={muscle1} rightImage={muscle2}/>
        </div>
    )
}


export default Muscle;