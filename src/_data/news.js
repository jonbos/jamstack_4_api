const axios = require("axios");
require("dotenv").config();

module.exports = async function() {
  try {
    const response = await axios.get(
      `http://newsapi.org/v2/top-headlines?q=trump&apiKey=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
