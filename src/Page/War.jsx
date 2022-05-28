import React from "react";
import ReactCompareImage from 'react-compare-image';
import war1 from "../Image/M.jpg";
import war2 from "../Image/N.jpg";


const War = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={war1} rightImage={war2}/>
        </div>
    )
}


export default War;