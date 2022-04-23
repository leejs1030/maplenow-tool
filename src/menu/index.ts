import axios from '@libs/axios';

const url = 'https://orng-api.nexon.com/api/services/maplestory/menus';
const getMenus = async () => {
  const menu = await axios.get(url);
  console.log(menu.data);
};

export {
  getMenus,
};
