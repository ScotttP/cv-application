import React from "react";
export default function EditAndSaveButton(props) {
	if (props.view === false) {
		return (
			<input
				className="editButtons"
				id={props.section + "EditButton"}
				type="button"
				value="Edit"
				onClick={props.toggleView}
			></input>
		);
	} else if (props.section === "generalInfo") {
		return (
			<input
				className="saveButtons"
				id={props.section + "SaveButton"}
				type="submit"
				value="Save"
				onClick={props.wrapperFunction}
			></input>
		);
	} else {
		return (
			<div className="saveAndAddButtonContainer">
				<input
					className="saveButtons"
					id={props.section + "SaveButton"}
					type="submit"
					value="Save"
					onClick={props.wrapperFunction}
				></input>
				<input
					className="addEntryButton"
					id={props.section + "AddSectionButton"}
					type="button"
					onClick={props.addSection}
					value="+"
				></input>
			</div>
		);
	}
}
