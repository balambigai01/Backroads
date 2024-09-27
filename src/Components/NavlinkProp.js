import React from 'react'


const NavlinkProp = ({href,text,itemClass}) => {
  return (
    <li >
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
}

export default NavlinkProp
