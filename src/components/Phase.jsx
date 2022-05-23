import React from "react";
import { FaPython } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
import { BsFileRichtextFill } from 'react-icons/bs';
import { FiArrowDown } from 'react-icons/fi';




const Phase = () => {
    return(
        <div className="container w-full py-16 px-28 bg-red-600 flex flex-col">
            <h1 className="text-white text-4xl font-noto-sans">製作規劃</h1>
            <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8 mt-10">
                <div className="w-80 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
                    <FaNewspaper className="mx-auto mt-[-40px] text-black" size={50}/>
                    <h2 className="font-noto-sans text-2xl text-center py-6 border-solid border-b-2 border-black">內容</h2>
                    <div className="font-noto-sans text-center">
                        <p className="mx-4 mt-4">製作內容</p>
                        <FiArrowDown className="mx-auto mt-4"/>
                        <p className="mx-4 mt-4">調整模板內容</p>
                        <FiArrowDown className="mx-auto mt-4"/>
                        <p className="mx-4 mt-4">製作音樂</p>
                    </div>
                </div>
                <div className="w-80 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
                    <BsFileRichtextFill className="mx-auto mt-[-40px] text-black" size={50}/>
                    <h2 className="font-noto-sans text-2xl text-center py-6 border-solid border-b-2 border-black">美術</h2>
                    <div className="font-noto-sans text-center">
                        <p className="mx-4 mt-4">參考新聞模板</p>
                        <FiArrowDown className="mx-auto mt-4"/>
                        <p className="mx-4 mt-4">製作模板</p>
                        <FiArrowDown className="mx-auto mt-4"/>
                        <p className="mx-4 mt-4">製作內容圖片、找素材</p>
                    </div>
                </div>
                <div className="w-80 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
                    <FaPython className="mx-auto mt-[-40px] text-black" size={50}/>
                    <h2 className="font-noto-sans text-2xl text-center py-6 border-solid border-b-2 border-black">技術</h2>
                    <div className="font-noto-sans text-center">
                        <p className="mx-4 mt-4">偵測</p>
                        <FiArrowDown className="mx-auto mt-4"/>
                        <p className="mx-4 mt-4">換圖</p>
                        <FiArrowDown className="mx-auto mt-4"/>
                        <p className="mx-4 mt-4">特效</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phase;