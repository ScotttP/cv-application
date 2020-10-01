import React from "react";

export default class GeneralInformation extends React.Component {
	render() {
		return (
			<aside id="generalInfoContainer">
				<img
					src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
					alt="profilePic"
					width="200"
					height="200"
				></img>
				<h1>Scott Pribe</h1>
				<h3>419-450-2549</h3>
				<div id="professionalContactContainer">
					<ul id="listContainer">
						<li>linkedIn (icons)</li>
						<li>Github (icons)</li>
						<li>Email (icons)</li>
					</ul>
				</div>
			</aside>
		);
	}
}
