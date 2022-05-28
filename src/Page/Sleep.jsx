import React from "react";
import ReactCompareImage from 'react-compare-image';
import sleep1 from "../Image/E.jpg";
import sleep2 from "../Image/F.jpg";


const Sleep = () => {
    return(
        <div className="container mx-auto">
            <ReactCompareImage leftImage={sleep1} rightImage={sleep2}/>
        </div>
    )
}


export default Sleep;