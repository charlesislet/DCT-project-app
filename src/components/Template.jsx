import React from "react";
import { Link } from 'react-router-dom'
import tea from "../Image/A.png";
import muscle from "../Image/C.png";
import sleep from "../Image/E.png";
import weed from "../Image/G.png";
import stock from "../Image/I.png";
import egg from "../Image/K.png";
import war from "../Image/M.png";
import musq from "../Image/O.png";
import festival from "../Image/Q.png";


const Template = () => {
    return(
        <div className="container w-full flex px-28 py-16">
            <div className="w-1/6 flex flex-col space-y-16 border-solid border-r-2 border-black">
                <div className="">
                    <h1 className="font-noto-sans text-4xl text-red-600">新</h1>
                </div>
                <div>
                    <h1 className="font-noto-sans text-4xl text-red-600">聞</h1>
                </div>
                <div className="">
                    <h1 className="font-noto-sans text-4xl text-red-600">模</h1>
                </div>
                <div>
                    <h1 className="font-noto-sans text-4xl text-red-600">版</h1>
                </div>
            </div>
            <div className="w-5/6 mx-auto flex flex-col pl-32 space-y-2 mt-[-45px]">
                <div>
                    <h2 className="text-xl font-noto-sans pb-2">報紙新聞</h2>
                        <div className="mx-auto grid md:grid-cols-3 gap-8">
                            <div className="relative">
                                <Link to="./weed" target="_blank">
                                <img src={weed} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                                <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">大麻</p>
                                </Link>
                            </div>
                            <div className="relative">
                                <Link to="/stock" target="_blank">
                                <img src={stock} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                                <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">股票</p>
                                </Link>
                            </div>
                            <div className="relative">
                                <Link to="/egg" target="_blank">
                                <img src={egg} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                                <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">雞蛋</p>
                                </Link>
                            </div>
                        </div>
                </div>
                <div>
                    <h2 className="text-xl font-noto-sans pb-2">網路新聞</h2>
                    <div className="mx-auto grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <Link to="/tea" target="_blank">
                            <img src={tea} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                            <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">茶葉</p>
                            </Link>                        
                        </div>
                        <div className="relative">
                            <Link to="/muscle" target="_blank">
                            <img src={muscle} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                            <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">肌力</p>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link to="/sleep" target="_blank">
                            <img src={sleep} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                            <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">睡眠</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-noto-sans pb-2">電視新聞</h2>
                    <div className="mx-auto grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <Link to="/war" target="_blank">
                            <img src={war} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                            <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">烏俄</p>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link to="/musq" target="_blank">
                            <img src={musq} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                            <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">蚊子</p>
                            </Link>
                        </div>
                        <div className="relative">
                            <Link to="/festival" target="_blank">
                            <img src={festival} width={210} className="block z-0 opacity-100 hover:opacity-30 rounded-lg shadow-xl"></img>
                            <p className="bg-slate-50 absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 text-2xl text-red-600 font-noto-sans">燈會</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template;