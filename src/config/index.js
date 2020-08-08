const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'minha-url-no-heroku';

export default {
  URL_BACKEND,
};
