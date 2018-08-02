import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';

export const fetchLoctions = searchTerm => {
	return dispatch => {
		axios
			// .get("https://www.metaweather.com/api/location/search/?query="+searchTerm)
			.get("/api/location/search/?query="+searchTerm)
			.then(function(response) {
												console.log("done");

				console.log(response);
				dispatch(receiveLoctions(response.header));
			})
			.catch(function(error) {
				// console.log(error.data);
								console.log(error);

			});
	};
};

export const receiveLoctions = locations => {
	return dispatch => {
		return dispatch({
			type: actionTypes.RECEIVE_LOCATIONS,
			locations
		});
	};
};



export const testAction = (testMsg) => ({
  type: actionTypes.TEST_ACTION,
  testMsg
})