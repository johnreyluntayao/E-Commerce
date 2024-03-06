import React from 'react'

type ButtonType  = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    name:string;

}

export const Button = ({name, onClick, className, ...props}: ButtonType) => {
  return (
    <div>
        <button {...props} className="" onClick={onClick}>{name}</button>
    </div>
  )
}