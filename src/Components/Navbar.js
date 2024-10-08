import React from 'react'
import logo from '../images/logo.svg'
import {  SocialLinks } from '../data';
import PageLink from './PageLink';
import SocialLinkProps from './SocialLinkProps';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
<PageLink parentClass="nav-links" itemClass="nav-link"/>
         

          <ul className="nav-icons">
            {SocialLinks.map((link) => {
                
              return (
               <SocialLinkProps key={link.id} {...link} itemClass="nav-icon"/>
              );
            })}
           
          </ul>
        </div>
      </nav>
      ;
    </>
  );
}

export default Navbar
