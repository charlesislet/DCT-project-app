import React from "react";
import { Link } from 'react-router-dom'
import tea from "../Image/A.jpg";
import muscle from "../Image/C.jpg";
import sleep from "../Image/E.jpg";
import weed from "../Image/G.png";
import stock from "../Image/I.png";
import egg from "../Image/K.png";
import war from "../Image/M.jpg";
import musq from "../Image/O.jpg";
import festival from "../Image/Q.jpg";
import Weed from "../Page/Weed";


const Template = () => {
    return(
        <div className="container w-full flex flex-col md:flex-row mx-auto md:px-20 md:py-16 items-center pt-5" name="template">
            <div className="md:w-1/6 flex flex-row md:flex-col text-center md:space-y-16 border-solid md:border-r-2  border-black pb-10">
                <div className="">
                    <h1 className="font-noto-sans text-5xl text-red-600 ">新</h1>
                </div>
                <div>
                    <h1 className="font-noto-sans text-5xl text-red-600">聞</h1>
                </div>
                <div className="">
                    <h1 className="font-noto-sans text-5xl text-red-600">模</h1>
                </div>
                <div>
                    <h1 className="font-noto-sans text-5xl text-red-600">版</h1>
                </div>
            </div>
            <div className="md:w-5/6 mx-auto flex flex-col md:pl-32 space-y-2 text-center md:text-left pb-4">
                <div>
                    <h2 className="text-3xl font-noto-sans pb-5 underline underline-offset-8 decoration-pink-500">報紙新聞</h2>
                        <div className="mx-auto grid md:grid-cols-3 gap-8">
                            <div className="relative">
                                <Link to="/weed" target="">
                                <img src={weed} width={250} className="block  rounded-lg shadow-xl"></img>
                                <p className="backdrop-blur-sm absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">大麻</p>
                                </Link>
                            </div>
                            <div className="relative">
                                <Link to="/stock" target="">
                                <img src={stock} width={250} className="block rounded-lg shadow-xl"></img>
                                <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">股票</p>
                                </Link>
                            </div>
                            <div className="relative">
                                <Link to="/egg" target="">
                                <img src={egg} width={250} className="block rounded-lg shadow-xl"></img>
                                <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">雞蛋</p>
                                </Link>
                            </div>
                        </div>
                </div>
                <div>
                    <h2 className="text-3xl font-noto-sans pb-5 pt-5 underline underline-offset-8 decoration-pink-500">網路新聞</h2>
                    <div className="mx-auto grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <Link to="/tea" target="">
                            <img src={tea} width={250} className="block rounded-lg shadow-xl"></img>
                            <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">茶葉</p>
                            </Link>                        
                        </div>
                        <div className="relative">
                            <Link to="/muscle" target="">
                            <img src={muscle} width={250} className="block rounded-lg shadow-xl"></img>
                            <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">肌力</p>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link to="/sleep" target="">
                            <img src={sleep} width={250} className="block rounded-lg shadow-xl"></img>
                            <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">睡眠</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-noto-sans pb-5 pt-5 underline underline-offset-8 decoration-pink-500">電視新聞</h2>
                    <div className="mx-auto grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <Link to="/war" target="">
                            <img src={war} width={250} className="block rounded-lg shadow-xl"></img>
                            <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">烏俄</p>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link to="/musq" target="">
                            <img src={musq} width={250} className="block rounded-lg shadow-xl"></img>
                            <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">蚊子</p>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link to="/festival" target="">
                            <img src={festival} width={250} className="block rounded-lg shadow-xl"></img>
                            <p className="backdrop-blur-sm absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">燈會</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template;