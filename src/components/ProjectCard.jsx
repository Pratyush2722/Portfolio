import React from 'react';
import './ProjectCard.css'; 


const ProjectCard = () => {
  return (
    <div className="container">
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Card One</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            nobis a minima laudantium, porro est animi atque sed nostrum ipsa
          </p>
          <a href="http://">Read More</a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Card Two</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            nobis a minima laudantium, porro est animi atque sed nostrum ipsa
          </p>
          <a href="http://">Read More</a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Card Three</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            nobis a minima laudantium, porro est animi atque sed nostrum ipsa
          </p>
          <a href="http://">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

