import React from "react";
import logo from "../Image/logo.png";
import meta from "../Image/meta.jpg";
 

const Footer = () => {
    return(
        <div className="container w-full mx-auto pt-12" name="footer">
            <div className="pt-2 pb-6 flex flex-col border-black border-t-4 border-double">
                <div className="flex md:flex-row flex-col space-x-3 pb-5 justify-center items-center">
                    <div className="flex flex-row">
                    <img src={meta} className="w-[70px]"/>
                    <img src={logo} className="w-[70px]"/>
                    </div>
                    <p className="font-noto-sans text-red-600 md:pl-10 text-center">2022 政大第十三屆數位內容畢業製作Meta Z</p>
                    <p className="font-noto-sans text-red-600 md:pl-2">第五組 戌時新聞</p>
                </div>
                <div className="flex md:flex-row flex-col md:space-x-8 justify-center">
                    <p className="font-noto-sans text-red-600 text-center">團隊成員</p>
                    <p className="font-noto-sans text-red-600 text-center">黃子珊 鄭昕宜 盧姿惠 林家榛 蕭竑軒 陳靖雯 邱芊涵 呂宜學</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;