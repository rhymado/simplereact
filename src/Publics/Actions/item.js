import Axios from 'axios';

export const getItem = () => {
  return {
    type: 'GET_ITEM',
    payload: Axios.get ('https://fortnite-api.theapinetwork.com/store/get', {
      headers: {
        Authorization: process.env.REACT_APP_KEY,
      },
    }),
  };
};
