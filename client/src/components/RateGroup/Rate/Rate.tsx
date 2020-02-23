import React, {ReactNode} from "react";
import clsx from "clsx";

import './Rate.scss'

interface IProps {
	className?: string,
	children: ReactNode,
	onClick(e: React.SyntheticEvent): any
}

const Rate: React.FC<IProps> = ({ className, children , onClick}) => {
	return (
		<li onClick={onClick} className={clsx(className, 'rate-item')}>
			{children}
		</li>
	)
}

export { Rate }
