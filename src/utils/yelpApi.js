require('whatwg-fetch');

const apiKey = process.env.YelpAPIKey;
const Yelp = {};

async function search(term, location, sortBy) {
  const resposnse = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );

  const jsonData = await resposnse.json();
  return jsonData.businesses;
}

export default search;
