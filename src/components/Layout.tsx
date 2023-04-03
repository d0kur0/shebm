import { styled } from "solid-styled-components";

export const Layout = styled.div`
	height: calc(100 * var(--vh));
	background-color: #0d1423;
	color: #b3c4e3;
	overflow: hidden;
`;

export const Body = styled.div`
	height: calc((var(--vh) * 100) - (var(--navigation-height)));
`;

export const Navigation = styled.div`
	height: var(--navigation-height);
`;
