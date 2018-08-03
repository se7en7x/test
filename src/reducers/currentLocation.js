const defaultLocation = {
  "consolidated_weather": [
    {
      "id": 5039175325712384,
      "weather_state_name": "Heavy Rain",
      "weather_state_abbr": "hr",
      "wind_direction_compass": "SW",
      "created": "2018-08-02T16:49:22.865310Z",
      "applicable_date": "2018-08-02",
      "min_temp": 23.086666666666662,
      "max_temp": 29.206666666666667,
      "the_temp": 29.149999999999999,
      "wind_speed": 5.6664914263713255,
      "wind_direction": 219.13128155982199,
      "air_pressure": 1019.63,
      "humidity": 79,
      "visibility": 8.2558483456613381,
      "predictability": 77
    },
    {
      "id": 4929845884616704,
      "weather_state_name": "Thunder",
      "weather_state_abbr": "t",
      "wind_direction_compass": "SSW",
      "created": "2018-08-02T16:49:26.061650Z",
      "applicable_date": "2018-08-03",
      "min_temp": 22.83666666666667,
      "max_temp": 27.599999999999998,
      "the_temp": 27.884999999999998,
      "wind_speed": 7.1408920794215121,
      "wind_direction": 197.05270298297552,
      "air_pressure": 1020.275,
      "humidity": 84,
      "visibility": 9.6446129603117789,
      "predictability": 80
    },
    {
      "id": 5044650695983104,
      "weather_state_name": "Heavy Rain",
      "weather_state_abbr": "hr",
      "wind_direction_compass": "WSW",
      "created": "2018-08-02T16:49:28.977920Z",
      "applicable_date": "2018-08-04",
      "min_temp": 21.586666666666662,
      "max_temp": 28.536666666666665,
      "the_temp": 28.505000000000003,
      "wind_speed": 5.9805669477822851,
      "wind_direction": 247.5,
      "air_pressure": 1018.46,
      "humidity": 82,
      "visibility": 10.595621570031017,
      "predictability": 77
    },
    {
      "id": 5450446520975360,
      "weather_state_name": "Heavy Cloud",
      "weather_state_abbr": "hc",
      "wind_direction_compass": "WSW",
      "created": "2018-08-02T16:49:31.464160Z",
      "applicable_date": "2018-08-05",
      "min_temp": 21.963333333333335,
      "max_temp": 30.333333333333332,
      "the_temp": 29.710000000000001,
      "wind_speed": 3.0636319768949338,
      "wind_direction": 239.5846195635188,
      "air_pressure": 1020.915,
      "humidity": 63,
      "visibility": 13.832033424799173,
      "predictability": 71
    },
    {
      "id": 5827228675866624,
      "weather_state_name": "Showers",
      "weather_state_abbr": "s",
      "wind_direction_compass": "SW",
      "created": "2018-08-02T16:49:34.659220Z",
      "applicable_date": "2018-08-06",
      "min_temp": 23.116666666666664,
      "max_temp": 31.123333333333335,
      "the_temp": 31.274999999999999,
      "wind_speed": 3.6577085058538139,
      "wind_direction": 228.33363440402729,
      "air_pressure": 1019.595,
      "humidity": 62,
      "visibility": 12.908675833134495,
      "predictability": 73
    },
    {
      "id": 4996400697835520,
      "weather_state_name": "Light Rain",
      "weather_state_abbr": "lr",
      "wind_direction_compass": "SW",
      "created": "2018-08-02T16:49:37.963920Z",
      "applicable_date": "2018-08-07",
      "min_temp": 23.050000000000001,
      "max_temp": 30.226666666666663,
      "the_temp": 27.379999999999999,
      "wind_speed": 3.6737059572098945,
      "wind_direction": 228.99999999999997,
      "air_pressure": 1016.4,
      "humidity": 65,
      "visibility": 9.9978624830987037,
      "predictability": 75
    }
  ],
  "time": "2018-08-02T15:29:52.883350-04:00",
  "sun_rise": "2018-08-02T05:54:17.802382-04:00",
  "sun_set": "2018-08-02T20:12:07.859162-04:00",
  "timezone_name": "LMT",
  "parent": {
    "title": "New Jersey",
    "location_type": "Region / State / Province",
    "woeid": 2347589,
    "latt_long": "40.143230,-74.726707"
  },
  "sources": [
    {
      "title": "BBC",
      "slug": "bbc",
      "url": "http://www.bbc.co.uk/weather/",
      "crawl_rate": 180
    },
    {
      "title": "Forecast.io",
      "slug": "forecast-io",
      "url": "http://forecast.io/",
      "crawl_rate": 480
    },
    {
      "title": "Met Office",
      "slug": "met-office",
      "url": "http://www.metoffice.gov.uk/",
      "crawl_rate": 180
    },
    {
      "title": "OpenWeatherMap",
      "slug": "openweathermap",
      "url": "http://openweathermap.org/",
      "crawl_rate": 360
    },
    {
      "title": "World Weather Online",
      "slug": "world-weather-online",
      "url": "http://www.worldweatheronline.com/",
      "crawl_rate": 360
    },
    {
      "title": "Yahoo",
      "slug": "yahoo",
      "url": "http://weather.yahoo.com/",
      "crawl_rate": 180
    }
  ],
  "title": "Newark",
  "location_type": "City",
  "woeid": 2459269,
  "latt_long": "40.731972,-74.174179",
  "timezone": "America/New_York"
};

export default function reducer(state = defaultLocation , action) {
  switch (action.type) {
  // case INCREMENT_NUM: 
  //   return state + 1;
  // case DECREMENT_NUM:
  //   return state - 1;
  // case RESET:
  //   return state = action.payload;
  }

  return state;
}