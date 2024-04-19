import React from 'react';
import { Link } from 'react-router-dom';
import future from '../assets/future.jpg';

const LearnMoreHeroSection = () => {
    return (
      <section className="grid lg:grid-cols-2 items-start mt-6 lg:mt-20 p-8 gap-8">
          <div className="order-hidden lg:order-first">
            <img src={future} alt="Future" className=" rounded-xl" />
          </div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-violet-800">Exploring AI</h2>
            <p className="text-lg mb-8">
                Artificial Intelligence (AI) is revolutionizing various industries, from healthcare to finance and beyond. It involves the development of computer systems that can perform tasks that typically require human intelligence.
            </p>
            <p className="text-lg mb-8">
                Developers are leveraging AI in a myriad of applications, shaping the way we interact with technology. Here are some key areas where AI is making an impact:
            </p>
            <ul className="list-disc ml-8">
                <li>
                    <strong>Machine Learning (ML) Models:</strong> ML algorithms are used for data analysis and predictions across various domains. From personalized recommendations on streaming platforms to fraud detection in financial transactions, ML models are at the heart of many data-driven applications.
                </li>
                <li>
                    <strong>Natural Language Processing (NLP):</strong> NLP techniques enable machines to understand and process human language. Developers use NLP for building chatbots, sentiment analysis, language translation, and content summarization, among other applications.
                </li>
                <li>
                    <strong>Computer Vision:</strong> Computer Vision allows machines to interpret and understand visual information from the world around us. This technology powers facial recognition systems, object detection in images and videos, autonomous vehicles, and medical imaging diagnostics.
                </li>
                <li>
                    <strong>Reinforcement Learning (RL):</strong> RL algorithms enable machines to learn and make decisions through trial and error. Developers apply RL techniques in training autonomous systems, such as self-driving cars, robotics, and game playing agents.
                </li>
            </ul>
            <p className="text-lg">
                As AI continues to advance, its applications are expanding into new frontiers. Developers are integrating AI into everyday technologies, shaping the future of how we interact with machines and data. From smart assistants in our homes to personalized healthcare solutions, the possibilities are endless.
            </p>
          </div>
          <div className="col-span-full text-center">
            <Link to="/" className="mt-10 bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-4 mx-3 rounded-md">Back to Main Page</Link>
          </div>
      </section>
    )
  } 

export default LearnMoreHeroSection