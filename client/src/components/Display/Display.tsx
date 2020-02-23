import React from "react";

import './Display.scss'
import clsx from "clsx";

interface IProps {
	minutes: number,
	seconds: number,
	isCountdownStarted: boolean
};

const Display: React.FC<IProps> = ({ minutes, seconds, isCountdownStarted}) => {
	const timerClasses = clsx('display', {
		'display--near': minutes === 0 && seconds <= 20 && isCountdownStarted,
		'display--blink': minutes === 0 && seconds <= 10 && isCountdownStarted
	})

	return (
		<>
			<div className={timerClasses}>{minutes}:{seconds}</div>
		</>
	);
};

export { Display };
