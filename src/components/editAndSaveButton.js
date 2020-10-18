import React from "react";
export default function EditAndSaveButton(props) {
	if (props.view === false) {
		return (
			<input type="button" value="Edit" onClick={props.toggleView}></input>
		);
	} else if (props.section === "generalInfo") {
		return (
			<input type="submit" value="Save" onClick={props.toggleView}></input>
		);
	} else {
		return (
			<div>
				<input type="submit" value="Save" onClick={props.toggleView}></input>
				<input
					type="button"
					onClick={props.addSection}
					className="addEntryButton"
					value="+"
				></input>
			</div>
		);
	}
}
