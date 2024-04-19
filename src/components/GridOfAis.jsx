import React from 'react';
import { Link } from 'react-router-dom';
import ais from '../constants';

const GridOfAis = () => {  
  
    
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ais.map((ai, index) => (
            <Link to={ai.link} key={index} className="group">
              <img src={ai.image} alt={ai.title} className="w-full h-64 object-cover mb-2" />
              <h2 className="text-xl font-bold mb-2">{ai.title}</h2>
              <p className="text-lg">{ai.description}</p>
            </Link>
          ))}
        </div>
  )
}

export default GridOfAis
