import React from "react";
export default function EditAndSaveButton(props) {
	if (props.view === false) {
		return <button onClick={props.toggleView}>Edit</button>;
	}
	return (
		<div>
			<input type="submit" value="Save" onClick={props.toggleView}></input>
			<button onClick={props.addJobOnClick} id="addJob">
				+
			</button>
		</div>
	);
}
