const axios = require("axios");
const handler = async (event) => {
  const cityName = event.queryStringParameters.city;

  const API_KEY = process.env.REACT_APP_API_KEY;

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  try {
    const { data } = await axios.get(currentWeatherUrl);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
