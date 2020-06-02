import React from 'react';
import { Link } from 'react-scroll'

function LinkList({ links }) {
  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="link-box"
        ><Link activeClass="active" to={link.to} spy={true} smooth={true} duration={800} >
            {link.text}
          </Link>
        </li>
      ))}

    </>
  );
}

export default LinkList;