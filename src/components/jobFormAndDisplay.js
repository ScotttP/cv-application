import React from "react";
import JobDisplay from "./jobDisplay";
import JobForm from "./jobForm";
export default function JobFormAndDisplay(props) {
	const currentView = props.jobInfo.formView;
	if (!currentView) {
		return <JobDisplay jobDisplayInfo={props} />;
	}
	return <JobForm jobFormInfo={props} />;
}
