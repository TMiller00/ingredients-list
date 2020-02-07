import React from 'react';
import IconMap from '../assets/icons';
import snakecase from 'lodash.snakecase';

const Icon: React.FC<{ text: string }> = ({ text }) => {
  let icon = (IconMap as any)[snakecase(text)]

  return (
    <img src={icon} alt={text}/>
  )
}

export default Icon

