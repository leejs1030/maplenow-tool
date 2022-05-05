import { uuidInfo, pageEnum } from 'custom-type';
import errors from '../../errors';
import Menus from '../menus';

const getPageList = async (pageName: pageEnum): Promise<uuidInfo[]> => {
  const menu = await Menus.getMenu();
  if (menu.status !== 200) throw new errors.NexonNowError();
  const res = menu.data.data[pageName];
  return res.children;
};

export default {
  getPageList,
};
