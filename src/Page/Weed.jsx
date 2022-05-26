import React from "react";
import ReactCompareImage from 'react-compare-image';
import weed1 from "../Image/G.png";
import weed2 from "../Image/H.png";


const Weed = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={weed1} rightImage={weed2} />
        </div>
    )
}


export default Weed;