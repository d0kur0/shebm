import { BiSolidCloudDownload } from "solid-icons/bi";
import { FaSolidPlay } from "solid-icons/fa";
import { FiExternalLink } from "solid-icons/fi";
import { ImEyeBlocked } from "solid-icons/im";
import { createEffect, createSignal } from "solid-js";

import { Asset } from "../stores/assets";

import {
	PlayButtonStyled,
	PlayerControlStyled,
	PlayerControlsStyled,
	PlayerInfoStyled,
	PlayerWrapperStyled,
	VideoBadgeStyled,
	VideoBadgesStyled,
	VideoDurationStyled,
	VideoElementStyled,
	VideoWrapperStyled,
} from "./Player.styles";

type PlayerProps = {
	asset: Asset;
};

const videoFormats = ["mp4", "avi", "mkv", "webm"];

function Video(props: { asset: Asset }) {
	let videoRef: HTMLVideoElement;
	const { file } = props.asset;
	const [paused, setPaused] = createSignal(true);
	const [percent, setPercent] = createSignal(0);

	createEffect(() => {
		videoRef.volume = 0;
	});

	const handleTimeUpdate = (event: Event & { currentTarget: HTMLVideoElement; target: Element }) => {
		const { currentTime, duration } = event.currentTarget;
		const percent = duration / 100;
		setPercent(currentTime / percent);
	};

	const handlePause = () => {
		setPaused(videoRef.paused);
		videoRef.paused ? videoRef.play() : videoRef.pause();
		setPaused(true);
	};

	return (
		<VideoWrapperStyled>
			<VideoElementStyled
				autoplay
				controls={false}
				onClick={handlePause}
				onTimeUpdate={handleTimeUpdate}
				ref={el => (videoRef = el)}
				onPlay={() => setPaused(false)}
				onPause={() => setPaused(true)}
				src={`${import.meta.env.VITE_GATEWAY}/proxy?url=${encodeURI(file.path)}`}
			/>
			<VideoDurationStyled percent={percent()} />
			{paused() && (
				<PlayButtonStyled>
					<FaSolidPlay />
				</PlayButtonStyled>
			)}
		</VideoWrapperStyled>
	);
}

function Image(props: { asset: Asset }) {
	return <img alt="?" src="" />;
}

export function Player(props: PlayerProps) {
	const { asset } = props;
	const fileExt = asset.file.path.split(".").pop();
	const isVideo = videoFormats.some(v => v === fileExt);
	const Component = isVideo ? Video : Image;

	return (
		<PlayerWrapperStyled>
			<Component asset={asset} />

			<PlayerInfoStyled>
				<span>{asset.file.name}</span>
			</PlayerInfoStyled>

			<VideoBadgesStyled>
				<VideoBadgeStyled>
					{asset.vendorName}/{asset.boardName}
				</VideoBadgeStyled>
			</VideoBadgesStyled>

			<PlayerControlsStyled>
				<PlayerControlStyled>
					<BiSolidCloudDownload />
				</PlayerControlStyled>
				<PlayerControlStyled>
					<FiExternalLink />
				</PlayerControlStyled>
				<PlayerControlStyled>
					<ImEyeBlocked />
				</PlayerControlStyled>
			</PlayerControlsStyled>
		</PlayerWrapperStyled>
	);
}
