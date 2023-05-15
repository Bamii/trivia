import React from 'react';

export default function Button({ children, text, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`${className} py-2 px-4 hover:bg-black hover:text-white`}
      {...props}
    >
      {children || text}
    </button>
  )
}
