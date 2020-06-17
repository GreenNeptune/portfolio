import React from 'react';
import LinkList from './LinkList';

function Links() {
  return (
    <div className="links d-sm-flex justify-content-lg-between align-items mt3 ">
      < LinkList links={[
        { to: "about", text: "About" },
        { to: "projects", text: "Projects" },
        { to: "contact", text: "Contact" }
      ]} />
    </  div >
  );
}

export default Links;