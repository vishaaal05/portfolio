import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiJavaFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
const Technologies = () => {
  return <div className="pb-24">
    <h2 className="text-center text-4xl">Technologies</h2>
    <div className="flex flex-wrap justify-center items-center mt-14 gap-10">
        <div>
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div>
        <BiLogoMongodb className="text-7xl text-green-600" />
        </div>
        <div>
        <SiMysql className="text-7xl text-cyan-500"/>
        </div>
        <div>
        <IoLogoJavascript  className="text-7xl text-yellow-400"/>
        </div>
        <div>
            <TbBrandNextjs className="text-7xl"/>
        </div>
        <div>
        <RiJavaFill   className="text-7xl text-yellow-400"/>
        </div>
        <div>
        <SiSpringboot    className="text-7xl text-green-500"/>
        </div>
        
    </div>
    </div>;
};

export default Technologies;
