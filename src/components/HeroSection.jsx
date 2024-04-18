import React from 'react';
import {Link} from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'><span className='bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text'>AI</span> HUB</h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Welcome to AI Hub, your central hub for exploring various artificial intelligence technologies. Whether you're interested in machine learning, natural language processing, or computer vision, we've got you covered. Our platform provides a comprehensive overview of different AI models and algorithms, along with practical applications and case studies. With curated resources and expert insights, we aim to demystify AI and inspire innovation. Join us on this journey of discovery and unlock the potential of artificial intelligence!</p>
            <div className="flex justify-center my-10">
            <Link to="/learn-more" className="bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-4 mx-3 rounded-md">Learn More</Link>
                
            </div>       
    
        </div>
      )
}

export default HeroSection
