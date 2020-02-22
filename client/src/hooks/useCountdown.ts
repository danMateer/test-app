import { useEffect, useState, useCallback, useRef } from "react";

export const useCountdown = () => {
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [isMounted, setIsMounted] = useState(false)
	const interval = useRef<number>();

	useEffect(() => {
		if (!isMounted) return

		const id = setInterval(() => {
			if (seconds > 0) setSeconds(sec => sec - 1);
			if (seconds === 0) {
				setMinutes(min => min - 1);
				setSeconds(59)
			};
			if (seconds <= 0 && minutes <= 0) {
				setMinutes(0);
				setSeconds(0);
				clearInterval(interval.current);
			};
		}, 1000);
		interval.current = id;

		return () => clearInterval(interval.current)
		// eslint-disable-next-line react-hooks/exhaustive-deps,
	}, [minutes, seconds]);

	useEffect(() => setIsMounted(true), []);

	const startCountdown = useCallback((countdown: string) => {
		setMinutes(+countdown.split(":")[0]);
		setSeconds(+countdown.split(":")[1]);
	}, []);

	const pauseCountdown = useCallback(() => {
		clearInterval(interval.current);
	}, [])

	const resumeCountdown = useCallback(() => {
		setSeconds(sec => sec - 1)
	}, [])

	return {
		timeLeft: { minutes, seconds },
		startCountdown,
		pauseCountdown,
		resumeCountdown
	};
};
