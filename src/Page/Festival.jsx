import React from "react";
import ReactCompareImage from 'react-compare-image';
import festival1 from "../Image/Q.png";
import festival2 from "../Image/R.png";


const Festival = () => {
    return(
        <div className="w-[1000px] mx-auto">
            <ReactCompareImage leftImage={festival1} rightImage={festival2}/>
        </div>
    )
}


export default Festival;