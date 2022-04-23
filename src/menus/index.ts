import axios from '@libs/axios';
import errors from '@errors';

const getMenus = async () => {
  const menu = await axios.get('/menus');
  if (menu.status !== 200) throw new errors.NexonNowError();
  return menu.data.data;
};

export default {
  getMenus,
};
