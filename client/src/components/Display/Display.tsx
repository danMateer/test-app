import React from "react";
import { Wrapper } from "./Display.style";

interface IProps {
	minutes: number,
	seconds: number
};

const Display: React.FC<IProps> = ({ minutes, seconds }) => {
	return (
		<Wrapper>{minutes}:{seconds}</Wrapper>
	);
};

export { Display };
