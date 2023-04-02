import { styled } from "solid-styled-components";

export const Layout = styled.div`
	height: calc(100 * var(--vh));
	--navigation-height: 55px;
	background-color: #161e31;
	color: #9fb4da;
`;

export const Body = styled.div`
	height: calc((var(--vh) * 100) - (var(--navigation-height)));
`;

export const Navigation = styled.div`
	height: var(--navigation-height);
`;
