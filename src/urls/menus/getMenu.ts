import myAxios from '../../libs/myaxios';
import errors from '../../errors';

const getMenu = async () =>
  myAxios.get('/menus').then((data) => {
    if (data.status !== 200) throw new errors.NexonNowError();
    return data;
  });

export default {
  getMenu,
};
