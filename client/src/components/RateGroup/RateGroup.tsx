import React from 'react'
import clsx from "clsx";

import { Rate } from './Rate/Rate'

import './RateGroup.scss'

interface IProps {
	rate: number,
	rates: number[],
	onChange(rate: number): any
}

const RateGroup: React.FC<IProps> = ({ rate: activeRate, rates , onChange}) => {
	return (
		<ul className='rate-group'>
			{rates.map(rate => (
				<Rate
					className={clsx({ 'rate-active': rate === activeRate })}
					onClick={e => onChange(rate)}
					key={rate}
				>
					{rate}x
				</Rate>
			))}
		</ul>
	)
}

export { RateGroup }
