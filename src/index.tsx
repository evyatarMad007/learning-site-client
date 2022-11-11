import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";
import "./assets/style/global/reset.css";
import "./assets/style/global/global.css";
import "./assets/style/variables/variables.css";
import { AppProviders } from "context/features/reports/index";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AppProviders>
				<App />
			</AppProviders>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
