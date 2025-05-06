import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  bgColor: string;
  link: string;
  title: string;
}

const SocialMediaButton: React.FC<Props> = ({ icon: Icon, bgColor, link, title }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col items-center justify-center ${bgColor} text-white rounded-xl w-40 h-24 text-sm sm:w-44 sm:h-24 md:w-48 md:h-28 sm:text-base shadow-lg hover:scale-105 transition`}
  >
    <Icon className="text-3xl sm:text-4xl mb-1" />
    <span className="text-center text-lg sm:text-xl">{title}</span>
  </a>
);

export default SocialMediaButton;
