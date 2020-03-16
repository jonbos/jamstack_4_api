const axios = require("axios");
require("dotenv").config();

module.exports = async function() {
  try {
    const response = await axios.get(
      `http://newsapi.org/v2/everything?q=apple&from=2020-03-15&to=2020-03-15&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
