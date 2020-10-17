import React from "react";
import GeneralInformation from "./components/genInfo";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";
import "./App.css";

export default class App extends React.Component {
	render() {
		return (
			<div id="appContainer">
				<GeneralInformation />
				<Experience />
				<Education />
				<Skills />
			</div>
		);
	}
}
