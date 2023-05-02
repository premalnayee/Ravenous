require('whatwg-fetch');

const apiKey = 'DZYg9Ks23pTt_Z1dKK5gtoOaYpEZkO0tAPx5tPX7Zfmh_ryRcKI5Z57F3ySuRWun1MYl_F3nPl1X_x9SlHM3UjJ2Z_rCrb2B-9_oZJ9Jf9aQu5PRLh4NFA88pyw0ZHYx';
const Yelp = {};

async function search(term, location, sortBy) {
    const resposnse = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers:{Authorization:`Bearer ${apiKey}`}} )
    
    const jsonData = await resposnse.json();
    return jsonData.businesses;
}

export default search;