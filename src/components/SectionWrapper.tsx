'use client';
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => (
  <section className="py-2 px-6  bg-gradient-to-b from-[#8d010c] via-[#f74b35] to-[#8d010c]">
    <div className="max-w-7xl mx-auto mt-10">{children}</div>
  </section>
);

export default SectionWrapper;
