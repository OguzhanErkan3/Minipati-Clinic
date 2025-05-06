'use client';
import React from 'react';
import type { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  text: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, text }) => (
  <div className="rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-8 text-center bg-white">
    <div className="w-24 h-24 bg-gradient-to-b from-[#8d010c] to-[#f74b35] rounded-full flex items-center justify-center mx-auto mb-6">
      <Icon className="text-white text-4xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{text}</p>
  </div>
);

export default ServiceCard;
