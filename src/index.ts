import Urls from './urls';
import Probs from './probs';
import * as mt from '../@types/mapletype';

export { Probs };
export const mapletype = mt;
export const { Pages, SubPages, Menus, Paragraphs } = Urls;
const maplenow = {
  Probs,
  ...Urls,
};
export default maplenow;
