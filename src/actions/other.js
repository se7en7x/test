import * as actionTypes from "../constants/actionTypes";
import axios from "axios";

export const fetchLoctions = searchTerm => {
	return dispatch => {
		dispatch({
			"type": actionTypes.FETCH_LOCATIONS,
			searchTerm
		});
		axios
			// .get("https://www.metaweather.com/api/location/search/?query="+searchTerm)
			.get("/api/location/search/?query="+searchTerm)
			.then(function(response) {
				console.log("done");
				console.log(response.data);
				dispatch(receiveLoctions(response.data));
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
			"type": actionTypes.RECEIVE_LOCATIONS,
			locations
		});
	};
};

export const selectLocation = (woeid,city) => {
	return dispatch => {
		dispatch({
			"type": actionTypes.SELECT_LOCATION,
			woeid
		});
		dispatch({
			"type": actionTypes.FETCH_LOCATIONS,
			 "searchTerm":city
		});
		dispatch(receiveLoctions([]));
		dispatch(fetchWeather(woeid));
	};
}

export const fetchWeather = woeid => {
	return dispatch => {
		axios
			// .get("https://www.metaweather.com/api/location/search/?query="+searchTerm)
			.get("/api/location/"+woeid+"/")
			.then(function(response) {
				console.log("done2222");
				console.log(response.data);
				dispatch(receiveWeather(response.data));
			})
			.catch(function(error) {
				// console.log(error.data);
								console.log(error);

			});
	};
};

export const receiveWeather = location => {
	return dispatch => {
		return dispatch({
			"type": actionTypes.RECEIVE_WEATHER,
			location
		});
	};
};


export const testAction = (testMsg) => ({
  "type": actionTypes.TEST_ACTION,
  testMsg
});