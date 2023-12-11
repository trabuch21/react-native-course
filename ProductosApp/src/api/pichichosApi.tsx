import axios from 'axios';

const baseUrl = 'http://localhost:3002';

const pichichosApi = axios.create({
  baseURL: baseUrl,
});

export default pichichosApi;