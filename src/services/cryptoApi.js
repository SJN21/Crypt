import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

const cryptoApiHeaders ={
    'X-RapidAPI-Key': 'c86cfbeb27msh143d4b78443a0b5p13958cjsn1eea85186c60',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com/coins';

export const createApi = cryptoApi({
    reducerPath:'cryptoApi',
    BaseQuery:fetchBaseQuery({baseUrl})
})
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'c86cfbeb27msh143d4b78443a0b5p13958cjsn1eea85186c60',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }