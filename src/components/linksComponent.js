import React from "react";

export default function LinksInformation(props) {
	return (
		<div id="professionalContactContainer">
			<ul id="listContainer">
				<a href={props.urls.linkedIn} rel="noopener noreferrer" target="_blank">
					<img
						className="icons"
						id="linkedInIcon"
						src="https://img.icons8.com/fluent/36/000000/linkedin.png"
						alt="LinkedIn"
					></img>
				</a>

				<a href={props.urls.github} rel="noopener noreferrer" target="_blank">
					<img
						className="icons"
						id="gitHubIcon"
						src="https://img.icons8.com/fluent-systems-filled/36/000000/github.png"
						alt="Github"
					/>
				</a>
				<a
					href={`mailto: ${props.urls.email}?subject=Interested In Your Resumé`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						className="icons"
						id="emailIcon"
						src="https://img.icons8.com/officexs/36/000000/gmail-login.png"
						alt="Email"
					/>
				</a>
				<button onClick={props.print} id="printButton">
					<img
						className="icons"
						id="printIcon"
						src="https://img.icons8.com/windows/36/000000/print-file.png"
						alt="Print"
					></img>
				</button>
			</ul>
		</div>
	);
}
