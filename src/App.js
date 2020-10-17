import React from "react";
import GeneralInformation from "./components/genInfo";
import Experience from "./components/experience";
import Education from "./components/education";
import "./App.css";

export default class App extends React.Component {
	render() {
		return (
			<div id="appContainer">
				<GeneralInformation />
				<Experience />
				<Education />
			</div>
		);
	}
}
