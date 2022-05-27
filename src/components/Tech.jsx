import React, {useState} from "react";
import { RiNumber1 } from 'react-icons/ri';
import { RiNumber2 } from 'react-icons/ri';
import { RiNumber3 } from 'react-icons/ri';
import { MdHorizontalRule } from 'react-icons/md';
import detectvid from '../Video/detect.mp4';
import newsvid from '../Video/news.mp4';
import outputvid from '../Video/output.mp4';


const Tech = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const clickOne = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
    }
    const clickTwo = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
    }
    const clickThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
    }
    const handleOne = () => {
        setOne(!one);
    };
    const handleTwo = () => {
        setTwo(!two);
    };
    const handleThree = () => {
        setThree(!three);
    };
   
    return(
        <div className="container mx-auto w-full py-16 px-2 md:px-28 bg-red-600 flex flex-col" name="tech">
            <h1 className="text-white text-3xl sm:text-4xl font-noto-sans mx-auto pb-5">技術</h1>
            <div className="flex flex-row pb-5 md:mx-auto">
                <RiNumber1 size={50} className={one ? "rounded-full p-2 bg-red-600 text-white border-2 border-white cursor-pointer" : "rounded-full p-2 bg-white text-black cursor-pointer"}  onClick={() => { clickOne(); handleOne();}}/>
                <MdHorizontalRule size={50} className="text-white"/>
                <MdHorizontalRule size={50} className="text-white"/>
                <MdHorizontalRule size={50} className="text-white"/>
                <RiNumber2 size={50} className={two ? "rounded-full p-2 bg-red-600 text-white border-2 border-white cursor-pointer" : "rounded-full p-2 bg-white text-black cursor-pointer"}  onClick={() => { clickTwo(); handleTwo();}}/>
                <MdHorizontalRule size={50} className="text-white"/>
                <MdHorizontalRule size={50} className="text-white"/>
                <MdHorizontalRule size={50} className="text-white"/>
                <RiNumber3 size={50} className={three ? "rounded-full p-2 bg-red-600 text-white border-2 border-white cursor-pointer" : "rounded-full p-2 bg-white text-black cursor-pointer"}  onClick={() => { clickThree(); handleThree();}}/>
            </div>
            <div className="flex flex-col md:flex-row mx-auto h-80">
                {one && (
                    <>
                    <div className="basis-1/2">
                        <video className='h-full w-full object-cover' src={detectvid} autoPlay loop muted />
                    </div>
                    <div className="basis-1/2 text-white font-noto-sans text-2xl my-auto md:pl-10">
                        使用OpenCV與MediaPipe即時偵測人走動的位置(綠點)
                    </div>
                    </>
                )}

                {two && (
                    <>
                    <div className="basis-1/2">
                    <video className='h-full w-full object-cover' src={newsvid} autoPlay loop muted />
                    </div>
                    <div className="basis-1/2 text-white font-noto-sans text-2xl my-auto md:pl-10">
                        使用切割和疊加圖片的方式更換新聞的模板，並加入特效
                    </div>
                    </>
                )}

                {three && (
                    <>
                    <div className="basis-1/2">
                    <video className='h-full w-full object-cover' src={outputvid} autoPlay loop muted />
                    </div>
                    <div className="basis-1/2 text-white font-noto-sans text-2xl my-auto md:pl-10">
                        結合一與二步驟，根據人在地面上走動的不同區塊，新聞做出相對的改變
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}


export default Tech;