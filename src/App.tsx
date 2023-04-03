import { Route, Router, Routes } from "@solidjs/router";
import { onMount } from "solid-js";

import { RandomShit } from "./pages/RandomShit";
import { Settings } from "./pages/Settings";
import { Thread } from "./pages/Thread";
import { Threads } from "./pages/Threads";

import { AppBar } from "./components/AppBar";
import { Body, Layout, Navigation } from "./components/Layout";

import { useHeightUnit } from "./hooks/useHeightUnit";

import { assetsStore } from "./stores/assets";

const App = () => {
	useHeightUnit();

	onMount(() => {
		assetsStore.fetchList();
	});

	return (
		<Router>
			<Layout>
				<Body>
					<Routes>
						<Route path="/" component={RandomShit} />
						<Route path="/threads" component={Threads} />
						<Route path="/thread/:id" component={Thread} />
						<Route path="/settings" component={Settings} />
					</Routes>
				</Body>
				<Navigation>
					<AppBar />
				</Navigation>
			</Layout>
		</Router>
	);
};

export default App;
