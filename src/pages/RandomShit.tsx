import { createSignal } from "solid-js";

import { Player } from "../components/Player";
import { ScrollableVideosStyled } from "../components/Player.styles";

import { assetsStore } from "../stores/assets";

export function RandomShit() {
	const { assets } = assetsStore;
	const [currentIndex, setCurrentIndex] = createSignal(0);

	return (
		<ScrollableVideosStyled>
			{assets().list[currentIndex()] && <Player asset={assets().list[currentIndex()]} />}
		</ScrollableVideosStyled>
	);
}
