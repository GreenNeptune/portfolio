import React from 'react';
import './sections.css';
import minecraftProjectPNG from '../../assests/img/minecraft_project_logo.PNG';
import TV_Shows_search from '../../assests/img/TV_Shows_search.PNG';
import chuck_norris_jokes from '../../assests/img/chuck_norris_jokes.PNG';
import Bali_Product from '../../assests/img/Bali_Product.PNG';


function Projects(props) {
  return (
    <section id="projects" name="projects">
      <h1>projects</h1>
      <div className="gallery">
        <div className="project">
          <div className="project__overlay">
            <h3><a href="https://github.com/GreenNeptune/Minecraft">Minecraft 2D</a></h3>
            <p>HTML, JS, CSS </p>
            <p> Bootstrap </p>
          </div>
          <img src={minecraftProjectPNG} alt="" />
        </div>
        <div className="project">
          <img src={Bali_Product} alt="" />
          <div className="project__overlay">
            <h3><a href="https://GreenNeptune.github.io/Online-Shope-BaliProduct">Online Shop</a></h3>
            <p>HTML, JS, CSS\SCSS </p>
            <p> React, Redux </p>
          </div>
        </div>
        <div className="project">
          <img src={TV_Shows_search} alt="" />
          <div className="project__overlay">
            <h3><a href="https://github.com/GreenNeptune/tvsearch">TV Shows Search</a></h3>
            <p>python, Bottle framework, JS </p>
            <p> HTML & CSS </p>
          </div>
        </div>
        <div className="project">
          <img src={chuck_norris_jokes} alt="" />
          <div className="project__overlay">
            <h3> <a href="http://GreenNeptune.github.io/chuck_norris_jokes">Chuck Norris Jokes</a> </h3>
            <p> HTML, CSS, JS, Bootstrap</p>
            <p>React, working with API's </p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Projects;