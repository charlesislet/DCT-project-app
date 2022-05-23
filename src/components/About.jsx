import React from "react";
import logo from "../Image/logo.png";
import Typed from "react-typed";
import { FaCircle } from 'react-icons/fa';


const About = () => {
    return(
        <>
        <div className="flex justify-center space-x-6 ">
            <div className="text-red-600 font-bold flex flex-row items-center space-x-2">
                <div className="animate-ping "><FaCircle/></div>
                <div>LIVE</div>
            </div>
            <div className="font-noto-sans">
                <Typed
                    strings={['數位內容', '第五組', 'OpenCV']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop>
                </Typed>
            </div>
        </div>
        <div className="container grid grid-cols-3 gap-4 justify-items-start mx-auto mt-12 py-8 px-16">
            <div className="col-span-2 space-y-4 border-solid border-black border-t-2">
                <h1 className="text-4xl text-red-600 font-bold pb-4 pt-12">About</h1>
                <p className="font-noto-sans first-letter:text-4xl text-lg text-justify w-9/12">
                    被資訊環繞的我們，接收到的都是真實嗎？還是，都是惡意的虛假呢？每個資訊都被片段的擷取與解釋，真相隱藏在哪裡？透過自己的腳步與雙眼，成為其中的一份子，去辨別眼前所見的虛與實。 
                </p>
                <p className="font-noto-sans text-lg text-justify w-9/12">
                在作品中，觀展者在展覽場上的移動會改變訊息的部分內容，藉由此互動來象徵人為的干預如何左右訊息的真假。
                </p>
            </div>
            <div className=" pt-8 border-solid border-black border-t-2">
                <div className="pl-6 border-slate-300 border-solid border-l-2">
                <img src={logo} width={350}></img>
                </div>
            </div>
        </div>
        </>
    )
}


export default About;