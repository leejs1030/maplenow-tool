import Urls from '@urls';
import { pageEnum } from 'custom-type';

describe('test for pages', () => {
  it('get pages from nexon now', async () => {
    const cube = await Urls.Pages.getPageList(pageEnum.cube);
    const abil = await Urls.Pages.getPageList(pageEnum.abil);
    expect(cube.length === 4).toBeTruthy();
    expect(abil.length === 2).toBeTruthy();
  });
});