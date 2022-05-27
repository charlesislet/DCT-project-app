import React, {useState} from "react";
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const current = new Date();
    const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return(
        <div className="sticky top-0 z-40 h-24 flex justify-between items-center px-2 md:px-16 mx-auto bg-white border-double border-t-2 border-b-4 border-black shadow-2xl">
            <div className="flex flex-col md:flex-row space-x-2 font-noto-sans">
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <div className="">
                <h1 className="font-noto-sans text-red-600 text-2xl md:text-4xl w-full pr-16">戌時新聞</h1>
            </div>
            <div onClick={handleNav} className='block cursor-pointer'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'cursor-pointer fixed right-0 top-24 w-[50%] h-full border-l border-black bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                <li className='p-4 border-b-2 border-black font-noto-sans text-red-600 text-2xl hover:underline decoration-black'>關於</li>
            </Link>
            <Link activeClass="active" to="phase" spy={true} smooth={true} offset={50} duration={500}>
                <li className='p-4 border-b-2 border-black font-noto-sans text-red-600 text-2xl hover:underline decoration-black'>製作規劃</li>
            </Link>
            <Link activeClass="active" to="template" spy={true} smooth={true} offset={50} duration={500}>
                <li className='p-4 border-b-2 border-black font-noto-sans text-red-600 text-2xl hover:underline decoration-black'>新聞模板</li>
            </Link>
            <Link activeClass="active" to="tech" spy={true} smooth={true} offset={50} duration={500}>
                <li className='p-4 border-b-2 border-black font-noto-sans text-red-600 text-2xl hover:underline decoration-black'>技術</li>
            </Link>
            <Link activeClass="active" to="vid" spy={true} smooth={true} offset={50} duration={500}>    
                <li className='p-4 border-b-2 border-black font-noto-sans text-red-600 text-2xl hover:underline decoration-black'>成果影片</li>
            </Link>    
                
            </ul>
        </div>
    )
}

export default Navbar;
