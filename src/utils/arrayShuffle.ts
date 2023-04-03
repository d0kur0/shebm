export function shuffle<T extends unknown>(array: T[]) {
	return array.sort(() => 0.5 - Math.random());
}
