import React from 'react'

const SocialLinkProps = ({href,icon,itemClass}) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <span>{icon}</span>
      </a>
    </li>
  );
}

export default SocialLinkProps
