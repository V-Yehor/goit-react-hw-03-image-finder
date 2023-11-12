import axios from 'axios';
const APIKEY = '39772594-ca36ede13ec9fedd73f09e8f7';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};
