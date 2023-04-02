import { Route, Router, Routes } from "@solidjs/router";

import { AppBar } from "./components/AppBar";
import { Body, Layout, Navigation } from "./components/Layout";

import { useHeightUnit } from "./hooks/useHeightUnit";

import { RandomShit } from "./stores/RandomShit";
import { Settings } from "./stores/Settings";
import { Thread } from "./stores/Thread";
import { Threads } from "./stores/Threads";

const App = () => {
	useHeightUnit();

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
