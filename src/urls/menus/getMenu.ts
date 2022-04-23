import axios from '@libs/axios';
import errors from '@errors';

const getMenu = async () =>
  axios.get('/menus').then((data) => {
    if (data.status !== 200) throw new errors.NexonNowError();
    return data;
  });

export default {
  getMenu,
};
