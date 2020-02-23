import { useEffect, useState, useCallback, useRef } from "react";

export const useCountdown = (rate: number) => {
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)


	const decreaseTimeBy1Sec = useCallback(() => {
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
	}, [minutes, seconds]);

	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => setIsMounted(true), []);

	const interval = useRef<number>();
	useEffect(() => {
		if (!isMounted) return;

		const id = window.setInterval(decreaseTimeBy1Sec, 1000 / rate);

		interval.current = id;

		return () => clearInterval(interval.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps,
	}, [minutes, seconds]);

	const startCountdown = useCallback((countdown: string) => {
		const [min, sec] = countdown.split(":")
		setMinutes(+min);
		setSeconds(+sec);
	}, []);

	const [isPaused, setIsPaused] = useState(false)
	const pauseCountdown = useCallback(() => {
		clearInterval(interval.current);

		if (seconds !== 0 || minutes !== 0) {
			setIsPaused(true)
		}
	}, [seconds, minutes]);

	const resumeCountdown = useCallback(() => {
		decreaseTimeBy1Sec();
		setIsPaused(false)
	}, [decreaseTimeBy1Sec])

	return {
		timeLeft: { minutes, seconds },
		startCountdown,
		pauseCountdown,
		resumeCountdown,
		isPaused
	};
};
