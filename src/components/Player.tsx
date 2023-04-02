import { styled } from "solid-styled-components";

type PlayerProps = {
	filePath: string;
};

const videoFormats = ["mp4", "avi", "mkv", "webm"];
const imageFormats = ["png", "jpeg", "jpg", "gif"];

const VideoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: black;
`;

const VideoEl = styled.video`
	max-width: 100%;
	height: 100%;
`;

function Video(props: PlayerProps) {
	return (
		<VideoWrapper>
			<VideoEl src={props.filePath} />
		</VideoWrapper>
	);
}

function Image(props: PlayerProps) {
	return <img alt="?" src="" />;
}

export function Player(props: PlayerProps) {
	const fileExt = props.filePath.split(".").pop();

	const isVideo = videoFormats.some(v => v === fileExt);
	const isImage = imageFormats.some(v => v === fileExt);

	return (
		<>
			{isVideo && <Video {...props} />}
			{isImage && <Image {...props} />}
		</>
	);
}
