import React from "react";
import exhibitionvid from '../Video/exhibitionvid.mp4'

const Vid = () => {
    return(
        <div className='w-full mx-auto' name="vid">
            <video className='h-full w-full object-cover' src={exhibitionvid} autoPlay loop muted />
            <div className="absolute h-full w-full top-0 flex justify-center items-center text-white">
                <h1>成果影片</h1>
            </div>
        </div>
    )
}

export default Vid;