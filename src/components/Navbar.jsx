import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
export const Navbar = () => {
    return (
        <div className='flex justify-between px-10 h-16 mt-2 items-center'>
            <div>
                <span className='text-white font-bold text-3xl'>VG</span>
                {/* <a href=""><img src="fevicon.png"  className='size-16' alt="" /></a> */}
            </div>
            <div className='flex gap-7 justify-center m-8 items-center'>
                <a href="https://instagram.com/vishaaal05" className='' target='_blank' rel='noreferrer noopener' aria-label='Instagram'>
                    <FaInstagram className='text-3xl'/>
                </a>
                <a href="https://github.com/vishaaal05" className='' target='_blank' rel='noreferrer noopener' aria-label='Github'>
                    <FaGithub  className='text-3xl'/>
                </a>
                <a href="https://www.linkedin.com/in/vishaaal05/" className='' target='_blank' rel='noreferrer noopener' aria-label='LinkedIn'>
                    <FaLinkedin className='text-3xl'/>
                </a>
                <a href="https://x.com/Vishaaal05" className='' target='_blank' rel='noreferrer noopener' aria-label='Twitter'>
                    <FaXTwitter className='text-3xl'/>
                </a>
            </div>
        </div>
    )
}
