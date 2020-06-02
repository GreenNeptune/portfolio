import React from 'react';
import { fadeInUp } from 'react-animations'

const style = {
  animationName: fadeInUp
}

function About(props) {
  return (
    <section id="about" name="about" className="text-center">
      <div className="about_content">
        <h1>Dvir Rabbani </h1>
        {/* <h1 className="about_title" style={style} >ABOUT</h1> */}

        <h1>Full Stack Developer</h1>
      </div>

    </section >
  );
}

export default About;