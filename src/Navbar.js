import React from 'react';

import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';



const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();


  const displaySubmenu = (e) => {
    console.log(e.target);
    
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);

    // recupar a pag de referência do btn
    const page = e.target.textContent;

    // calcular valor do ponto central do btn
    const center = (tempBtn.left + tempBtn.right) / 2;

    // posicionar o submenu 3px  sobre o btn
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };


  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-log" />
          <button 
            className="btn toggle-btn" 
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
      
    </nav>
  );
}



export default Navbar


