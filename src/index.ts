import Urls from './urls';
import Probs from './probs';
import * as mapletype from '../@types/mapletype';

export { Probs, mapletype };
export const { Pages, SubPages, Menus, Paragraphs } = Urls;
const maplenow = {
  Probs,
  ...Urls,
};
export default maplenow;
