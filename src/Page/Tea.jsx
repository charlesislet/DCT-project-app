import React from "react";
import ReactCompareImage from 'react-compare-image';
import tea1 from "../Image/A.png";
import tea2 from "../Image/B.png";


const Tea = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={tea1} rightImage={tea2}/>
        </div>
    )
}


export default Tea;