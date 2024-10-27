import React from 'react'

export const MainHeader = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-16 md:py-36 bg-black'>
            <div className='px-5 md:px-20 w-full md:w-1/2 text-white'>
                <h1 className='text-3xl md:text-5xl py-4 md:py-8'>Vishal Kumar Gupta</h1>
                <h3 className='text-xl md:text-2xl py-3 md:py-7'>Full Stack Developer</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis et dignissimos mollitia beatae ipsa explicabo inventore tempora quis nesciunt ab aliquam vero, dolorum voluptates rerum pariatur amet distinctio, eveniet corruptio.</p>
            </div>
            <div className='px-5 md:px-20 mt-8 md:mt-0'>
                <div>
                    <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1730016435~exp=1730020035~hmac=ecd9b9c0beba5bd4594248dc22bf368f9ef2abc2c9e1c8363fc4dedc0934cbc5&w=740" 
                        alt="not loading" 
                        className='rounded-xl max-w-full md:max-w-80 invert' />
                </div>
            </div>
        </div>
    )
}
