import React from 'react'

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'><span className='bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text'>AI</span> HUB</h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Welcome to AI Hub, your central hub for exploring various artificial intelligence technologies. Whether you're interested in machine learning, natural language processing, or computer vision, we've got you covered. Our platform provides a comprehensive overview of different AI models and algorithms, along with practical applications and case studies. With curated resources and expert insights, we aim to demystify AI and inspire innovation. Join us on this journey of discovery and unlock the potential of artificial intelligence!</p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-4 mx-3 rounded-md">Learn More</a>
                
            </div>
            {/* <div className='flex mt-10 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4'>
                    <source src={video1} type='video/mp4' />
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4'>
                    <source src={video2} type='video/mp4' />
                </video>
            </div> */}
    
    
        </div>
      )
}

export default HeroSection
