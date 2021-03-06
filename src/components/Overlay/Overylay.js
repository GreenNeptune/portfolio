import React from 'react';

function Overylay({ project }) {
  return (
    <div class="col-md-4">
      <div class="project d-flex justify-content-center align-items-center">
        <div class="overlay"></div>
        <div class="text text-center p-4">
          <h3><a target="_blank" href={project.link}>{project.linkContent}</a></h3>
          <span>{project.description}</span>
        </div>
      </div>
    </div >
  );
}

export default Overylay;