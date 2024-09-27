import React from 'react'
import { SocialLinks } from '../data';
import PageLink from './PageLink';
import SocialLinkProps from './SocialLinkProps';

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLink parentClass="footer-links" itemClass="footer-link" />
        
        <ul className="footer-icons">
          {SocialLinks.map((link) => {
           
            return (
              <SocialLinkProps
                key={link.id}
                {...link}
                itemClass="footer-icon"
              />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer
