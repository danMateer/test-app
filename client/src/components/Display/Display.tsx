import React from "react";

import './Display.scss'

interface IProps {
	minutes: number,
	seconds: number
};

const Display: React.FC<IProps> = ({ minutes, seconds }) => {
	return (
		<div className='display'>{minutes}:{seconds}</div>
	);
};

export { Display };
