import React from "react";
import ReactCompareImage from 'react-compare-image';
import sleep1 from "../Image/E.png";
import sleep2 from "../Image/F.png";


const Sleep = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={sleep1} rightImage={sleep2}/>
        </div>
    )
}


export default Sleep;