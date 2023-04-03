import { css, styled } from "solid-styled-components";

export const VideoWrapperStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: black;
`;

export const ScrollableVideosStyled = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	height: calc(100 * var(--vh) - var(--navigation-height));
`;

export const VideoElementStyled = styled.video`
	max-width: 100%;
	height: 100%;
	max-height: 100%;
`;

export const VideoDurationStyled = styled.div<{ percent: number }>`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 5px;
	border-radius: 10px;
	transition: 0.3s;

	&::after {
		transition: 0.3s;
		border-radius: 8px;
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		height: 5px;
		background-color: #b483f1;
		width: ${props => props.percent}%;
	}
`;

export const PlayButtonStyled = styled.button`
	position: absolute;
	background-color: transparent;
	color: #fff;
	border: none;
	font-size: 3em;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
`;

export const PlayerWrapperStyled = styled.div`
	height: 100%;
	position: relative;
	scroll-snap-align: start;
`;

export const PlayerControlsStyled = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 30px;
	bottom: 100px;
	right: 10px;
`;

export const PlayerControlStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: rgba(113, 54, 181, 0.46);
	color: #d8e8ff;
	cursor: pointer;
	font-size: 1.5em;
	padding: 10px;
	border-radius: 50%;
`;

export const PlayerInfoStyled = styled.div`
	position: absolute;
	overflow: hidden;
	text-overflow: ellipsis;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	color: #fff;
	width: 100%;
	font-size: 0.9em;
	font-weight: bold;
	padding: 10px;

	span {
		background-color: rgba(0, 0, 0, 0.47);
		padding: 5px 10px;
		border-radius: 10px;
	}
`;

export const VideoBadgesStyled = styled.div`
	position: absolute;
	display: flex;
	gap: 6px;
	padding: 7px 0;
	bottom: 10px;
	font-size: 0.7em;
	left: 10px;
`;

export const VideoBadgeStyled = styled.span`
	border-radius: 12px;
	background-color: #7136b5;
	font-weight: bold;
	padding: 5px 8px;
	color: #fff;
`;
