import axios from 'axios';

const unifyClient = axios.create({
  baseURL: 'https://api.unify.ai/v0',
  headers: {
    'Authorization': `Bearer ${process.env.UNIFY_API_KEY}`
  }
});

export default unifyClient;
