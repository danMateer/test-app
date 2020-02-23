import React, { ReactNode } from "react";
import clsx from "clsx";

import './BaseButton.scss'

interface IProps {
  children: ReactNode
  theme?: 'positive' | 'neutral'
  rounded?: boolean
  className?: string
  onClick?(e: React.SyntheticEvent): any
};

const BaseButton: React.FC<IProps> = ({
    children,
    onClick,
    theme= "positive",
    rounded= false,
    className
  }) => {
  const classes = clsx([className, 'base-button'], {
    'base-button--rounded': rounded,
    [`base-button--${theme}`]: theme
  })
  return (
      <button className={classes} onClick={onClick}>
          {children}
      </button>
  )
};

export { BaseButton };
