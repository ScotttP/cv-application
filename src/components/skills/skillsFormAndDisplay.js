import React from "react";

export default class SkillsFormAndDisplay extends React.Component {
	render() {
		if (this.props.view === false) {
			return (
				<div id={this.props.index}>
					<div>
						<p>{this.props.data.skill}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div id={this.props.id}>
					<label>
						<input
							name="skill"
							type="text"
							id={`skill${this.props.index}`}
							value={this.props.data.skill}
							onChange={this.props.handleChange}
							placeholder="Javascript"
						></input>
					</label>
					<input
						id={`deleteSkillAtIndex${this.props.index}`}
						onClick={(e) => this.props.deleteSkillOnClick(e)}
						value="x"
						type="button"
					></input>
				</div>
			);
		}
	}
}
