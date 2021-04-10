import md5 from 'crypto-js/md5';

require('dotenv').config();

const PUBLIC_KEY = process.env.REACT_APP_PUBLICKEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATEKEY;
// const HASH = process.env.REACT_APP_HASH;

const fetchMarvel = async (option) => {
  const marvelApi = 'http://gateway.marvel.com/v1/public';
  const ts = new Date();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
  return fetch(`${marvelApi}/${option}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
};

export default fetchMarvel;
