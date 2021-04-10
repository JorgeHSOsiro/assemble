import md5 from 'crypto-js/md5';

require('dotenv').config();

const PUBLIC_KEY = process.env.REACT_APP_PUBLICKEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATEKEY;

const fetchMarvel = async (option, search) => {
  const marvelApi = 'http://gateway.marvel.com/v1/public';
  const ts = new Date();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
  if (option === 'comics') {
    return fetch(`${marvelApi}/${option}?titleStartsWith=${search}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
  }
  return fetch(`${marvelApi}/${option}?nameStartsWith=${search}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
};

export default fetchMarvel;
