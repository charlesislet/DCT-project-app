import React, {useState} from "react";
import Projector from "../Modal/Projector";
import Footprint from "../Modal/Footprint";
import Screen from "../Modal/Screen";
import Camera from "../Modal/Camera";
import room from "../Image/room.jpg";
import { BsFillInfoCircleFill } from 'react-icons/bs';



const Roomdeploy = () => {
    const [openProjector, setOpenProjector] = useState(false);
    const [openFootprint, setOpenFootprint] = useState(false);
    const [openCamera, setOpenCamera] = useState(false);
    const [openScreen, setOpenScreen] = useState(false);
    return(
        <div className="container mx-auto flex justify-center" name="roomdeploy">
            <div className="relative">
                <img classname="w-full" src={room} width={800}/>
                <h1 className="absolute top-[40%] md:left-[18%] left-[15%] -skew-y-6 text-red-600 md:text-4xl text-xl font-noto-sans">
                    展場配置
                </h1>
                <button className="absolute top-[52%] left-[29%] z-10" onClick={() => setOpenProjector(true)}>
                    <BsFillInfoCircleFill className="text-red-600 md:text-lg text-xs"/>
                </button>
                <Projector open={openProjector} onClose={() => setOpenProjector(false)} />
                <button className="absolute top-[25%] left-[43%] z-10" onClick={() => setOpenCamera(true)}>
                    <BsFillInfoCircleFill className="text-red-600 md:text-lg text-xs"/>
                </button>
                <Camera open={openCamera} onClose={() => setOpenCamera(false)} />
                <button className="absolute top-[40%] left-[70%] z-10" onClick={() => setOpenScreen(true)}>
                    <BsFillInfoCircleFill className="text-red-600 md:text-lg text-xs"/>
                </button>
                <Screen open={openScreen} onClose={() => setOpenScreen(false)} />
                <button className="absolute top-[73%] left-[67%] z-10" onClick={() => setOpenFootprint(true)}>
                    <BsFillInfoCircleFill className="text-red-600 md:text-lg text-xs"/>
                </button>
                <Footprint open={openFootprint} onClose={() => setOpenFootprint(false)} />
            </div>
        </div>
    )
}


export default Roomdeploy;