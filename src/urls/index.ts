import axios from '@libs/axios';
import errors from '@errors';
import { pageEnum } from 'custom-type';

const getPageList = async (pageName?: pageEnum) => {
  const menu = await axios.get('/menus');
  if (menu.status !== 200) throw new errors.NexonNowError();
  if (!pageName) return menu.data.data;
  return menu.data.data[pageName].children;
};

export default {
  getPageList,
};
