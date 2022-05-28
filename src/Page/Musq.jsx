import React from "react";
import ReactCompareImage from 'react-compare-image';
import musq1 from "../Image/O.jpg";
import musq2 from "../Image/P.jpg";


const Musq = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={musq1} rightImage={musq2}/>
        </div>
    )
}


export default Musq;