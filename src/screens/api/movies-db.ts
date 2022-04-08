import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e124a0f39b325eff8d859cdd8ff4a882',
    language: 'es-ES',
  },
});

export default movieDB;
