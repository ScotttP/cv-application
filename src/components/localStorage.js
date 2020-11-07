import { useState, useEffect } from "react";
export default function useLocalStorage(requestedItem, defaultValue) {
	const [state, setState] = useState(() => {
		let value;
		try {
			value = JSON.parse(
				window.localStorage.getItem(requestedItem) || String(defaultValue)
			);
		} catch (e) {
			value = defaultValue;
			console.log("error occured.");
		}
		return value;
	});
	useEffect(() => {
		window.localStorage.setItem(requestedItem, state);
	}, [state]);
	return [state, setState];
}
