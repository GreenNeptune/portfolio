import React, { useEffect, useState, useRef } from 'react';
import { Events } from 'react-scroll'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Links from './Links';




const Menu = () => {
  const menuRef = useRef(null)
  const [meneHeight, setMeneHeight] = useState(0);

  useEffect(() => {
    setMeneHeight(menuRef.current.clientHeight)
  }, []);



  useEffect(() => {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  })

  return (
    <div>
      <div style={{ height: `${meneHeight}px`, width: "100%" }}></div>
      <Navbar ref={menuRef} id="navbar" className="fixed" expand="md">
        <Navbar.Brand href="#home">Dvir Rabbani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            < Links />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

};

export default Menu;
