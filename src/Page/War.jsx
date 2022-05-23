import React from "react";
import ReactCompareImage from 'react-compare-image';
import war1 from "../Image/M.png";
import war2 from "../Image/N.png";


const War = () => {
    return(
        <div className="w-[1000px] mx-auto">
            <ReactCompareImage leftImage={war1} rightImage={war2}/>
        </div>
    )
}


export default War;