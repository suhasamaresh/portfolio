"use client";
import React from 'react';

interface MatrixBackgroundProps {
  intensity ?: 'low' | 'medium' | 'high';
  show ?: boolean;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  intensity = 'high',
  show = true,
}) => {
  if(!show) return null;
  const gridSize = intensity === 'low' ? 60 : intensity === 'medium' ? 50 : 40;
  return(
    <div
    className='fixed inset-0 z-0'
    style = {{
      background: 'linear-gradient(135deg, #002200 0%, #005500 50%, #002200 100%)',
      opacity: 1,
      backgroundImage: `
         linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
         linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: `${gridSize}px ${gridSize}px`,
    }}
  />
  );
};

export default MatrixBackground;