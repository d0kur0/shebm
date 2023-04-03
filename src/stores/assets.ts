import { createSignal } from "solid-js";

import { shuffle } from "../utils/arrayShuffle";

export type AssetFile = {
	name: string;
	path: string;
	preview: string;
	threadId: number;
};

export type Asset = {
	file: AssetFile;
	boardName: string;
	vendorName: string;
	sourceThread: string;
};

type AssetsStore = {
	list: Asset[];
	isLoading: boolean;
};

function createAssetsStore() {
	const [assets, setAssets] = createSignal<AssetsStore>({ list: [], isLoading: true });

	const fetchList = async () => {
		setAssets(v => ({ ...v, isLoading: true }));
		const response = await fetch(`${import.meta.env.VITE_GATEWAY}/files`);
		const assets = (await response.json()) as Asset[];
		setAssets(v => ({ ...v, isLoading: false, list: shuffle(assets) }));
	};

	return { assets, fetchList };
}

export const assetsStore = createAssetsStore();
