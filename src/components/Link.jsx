import React from "react";
import { Link } from 'react-router-dom'

export default function LinkMod({ className, children, ...props }) {
  return (
    <Link className={`${className || ''} py-2 px-4 hover:bg-black hover:text-white`} {...props}>
      { children }
    </Link>
  )
}
