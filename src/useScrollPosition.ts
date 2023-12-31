/**
 * useScrollPosition
 * Project: hum_beautification
 * Author: jovialis (Dylan Hanson)
 * Date: 12/13/23
 */
import {useEffect, useState} from "react";

export function useScrollPosition() {

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, {passive: true});

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
}