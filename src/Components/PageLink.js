import React from 'react'
import { PageLinks } from '../data';
import NavlinkProp from './NavlinkProp';

const PageLink = ({parentClass,itemClass}) => {
  return (
   
      <ul className={parentClass} id={parentClass}>
        {PageLinks.map((link) => {
          return (
            <NavlinkProp key={link.id} {...link} itemClass={itemClass}/>
          );
        })}
      </ul>
    
  );
}

export default PageLink
