export function debounce<T extends Function>(cb: T, wait = 50) {
	let h: number;
	return (...args: unknown[]) => {
		clearTimeout(h);
		h = setTimeout(() => cb(...args), wait);
	};
}
