import errors from '@errors';
import { uuidInfo, pageEnum } from 'custom-type';
import menus from '@urls/menus';

const getPageList = async (pageName: pageEnum): Promise<uuidInfo[]> => {
  const menu = await menus.getMenu();
  if (menu.status !== 200) throw new errors.NexonNowError();
  const res = menu.data.data[pageName - pageEnum.base];
  return res.children;
};

export default {
  getPageList,
};
