import React from "react";

export default class EducationFormAndDisplay extends React.Component {
	render() {
		if (this.props.view === false) {
			return (
				<div id={this.props.index}>
					<div>
						<h2>Name of Institution:</h2>
						<p>{this.props.data.institutionName}</p>
					</div>
					<div>
						<h2>Major:</h2>
						<p>{this.props.data.major}</p>
					</div>
					<div>
						<h2>Minor:</h2>
						<p>{this.props.data.minor}</p>
					</div>
					<div>
						<h2>Degree:</h2>
						<p>{this.props.data.degreeType}</p>
					</div>
					<div>
						<h2>GPA:</h2>
						<p>{this.props.data.gpa}</p>
					</div>
					<div>
						<h2>Year Of Graduation:</h2>
						<p>{this.props.data.yearOfGraduation}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div id={this.props.id}>
					<label>
						Name of Institution:
						<input
							name="institutionName"
							type="text"
							id={`institutionName${this.props.index}`}
							value={this.props.data.institutionName}
							onChange={this.props.handleChange}
							placeholder="State University"
						></input>
					</label>
					<label>
						Major:
						<input
							name="major"
							type="text"
							id={`major${this.props.index}`}
							value={this.props.data.major}
							onChange={this.props.handleChange}
							placeholder="Computer Science"
						></input>
					</label>
					<label>
						Minor:
						<input
							name="minor"
							type="text"
							id={`minor${this.props.index}`}
							value={this.props.data.minor}
							onChange={this.props.handleChange}
							placeholder="Mathematics"
						></input>
					</label>
					<label>
						Degree Type:
						<input
							name="degreeType"
							type="text"
							id={`degreeType${this.props.index}`}
							value={this.props.data.degreeType}
							onChange={this.props.handleChange}
							placeholder="Bachelor's"
						></input>
					</label>
					<label>
						Year Of Graduation:
						<input
							name="yearOfGraduation"
							type="text"
							id={`yearOfGraduation${this.props.index}`}
							value={this.props.data.yearOfGraduation}
							onChange={this.props.handleChange}
							placeholder="2020"
						></input>
					</label>
					<button
						id={`deleteEducationAtIndex${this.props.index}`}
						onClick={(e) => this.props.deleteEducationOnClick(e)}
					>
						x
					</button>
				</div>
			);
		}
	}
}
