import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconDefinition;
  bgColor: string;
  link: string;
  title: string;
}

const SocialMediaLink: React.FC<Props> = ({ icon, bgColor, link, title }) => {
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col items-center justify-center 
                ${bgColor} text-white rounded-xl 
                w-40 h-24 sm:w-44 sm:h-24 md:w-48 md:h-28
                text-sm sm:text-base
                shadow-lg hover:scale-105 transition`}
  >
    <FontAwesomeIcon icon={icon} className="text-3xl sm:text-4xl mb-1" />
    <span className="text-center text-lg sm:text-xl">{title}</span>
  </a>
  );
};

export default SocialMediaLink;
