import React from "react";
import ReactCompareImage from 'react-compare-image';
import festival1 from "../Image/Q.jpg";
import festival2 from "../Image/R.jpg";


const Festival = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={festival1} rightImage={festival2}/>
        </div>
    )
}


export default Festival;