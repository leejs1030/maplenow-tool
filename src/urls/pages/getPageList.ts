import errors from '@errors';
import { uuidInfo, pageEnum } from 'custom-type';
import Urls from '@urls';

const getPageList = async (pageName: pageEnum): Promise<uuidInfo[]> => {
  const menu = await Urls.Menus.getMenu();
  if (menu.status !== 200) throw new errors.NexonNowError();
  const res = menu.data.data[pageName];
  return res.children;
};

export default {
  getPageList,
};
