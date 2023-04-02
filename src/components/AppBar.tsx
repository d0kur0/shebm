import { Link } from "@solidjs/router";
import { FaSolidTableList } from "solid-icons/fa";
import { FiSearch } from "solid-icons/fi";
import { ImLoop } from "solid-icons/im";
import { IoSettings } from "solid-icons/io";
import { TbArrowsRandom } from "solid-icons/tb";
import { styled } from "solid-styled-components";

const Elements = styled.div`
	margin: 0;
	list-style: none;
	padding: 10px;
	display: flex;
	border-top: 2px solid rgba(0, 21, 54, 0.79);
`;

const Element = styled(Link)`
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	font: inherit;
	border: none;
	color: inherit;
	text-decoration: none;
`;

const ElementIcon = styled.span`
	font-size: 1.1em;
`;

const ElementTitle = styled.span`
	font-size: 0.6em;
`;

export function AppBar() {
	return (
		<Elements>
			<Element href="/">
				<ElementIcon>
					<TbArrowsRandom />
				</ElementIcon>
				<ElementTitle>random</ElementTitle>
			</Element>
			<Element href="/threads">
				<ElementIcon>
					<FaSolidTableList />
				</ElementIcon>
				<ElementTitle>threads</ElementTitle>
			</Element>
			<Element href="#loop">
				<ElementIcon>
					<ImLoop />
				</ElementIcon>
				<ElementTitle>loop</ElementTitle>
			</Element>
			<Element href="/search">
				<ElementIcon>
					<FiSearch />
				</ElementIcon>
				<ElementTitle>search</ElementTitle>
			</Element>
			<Element href="/settings">
				<ElementIcon>
					<IoSettings />
				</ElementIcon>
				<ElementTitle>settings</ElementTitle>
			</Element>
		</Elements>
	);
}
