import React from "react";
import ReactCompareImage from 'react-compare-image';
import stock1 from "../Image/I.jpg";
import stock2 from "../Image/J.jpg";


const Stock = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={stock1} rightImage={stock2}/>
        </div>
    )
}


export default Stock;