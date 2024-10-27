import React from 'react'
export const Navbar = () => {
    return (
        <div className='flex justify-between px-10 bg-black h-16 items-center'>
            <div>
                <span className='text-white font-bold text-3xl'>VG</span>
            </div>
            <div className='flex gap-7'>
                <a href="" className=''>
                    <img src="https://w7.pngwing.com/pngs/904/880/png-transparent-instagram-logo-screenshot-white-wine-logo-computer-icons-instagram-black-label-photography-black-and-white.png" className='w-[60px] invert ' alt="" />
                </a>
                <a href="">
                    <img src="https://img.icons8.com/m_sharp/200/FFFFFF/github.png"  className='w-11 ' alt="" />
                </a>
                <a href="">
                    <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png" alt="" className='w-10 invert' />
                </a>
                <a href="">
                    <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1730016435~exp=1730020035~hmac=ecd9b9c0beba5bd4594248dc22bf368f9ef2abc2c9e1c8363fc4dedc0934cbc5&w=740" alt="" className='w-10 invert rounded-3xl'/>
                </a>
            </div>
        </div>
    )
}
