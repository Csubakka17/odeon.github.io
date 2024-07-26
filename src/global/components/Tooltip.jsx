import React from 'react';
import '../../assets/css/tooltip.css';

export default function Tooltip({ content, position }) {
  if (!content) return null;

  return (
    <div className="tooltip" style={{ top: position.top, left: position.left }}>
      {content}
    </div>
  );
}
