import Urls from '@urls';
import { pageEnum } from 'custom-type';

describe('test for pages', () => {
  it('get pages from nexon now', async () => {
    const cube = await Urls.Pages.getPageList(pageEnum.cube);
    const abil = await Urls.Pages.getPageList(pageEnum.abil);
    const outfit = await Urls.Pages.getPageList(pageEnum.outfit);
    expect(cube.length).toBe(4);
    expect(abil.length).toBe(2);
    expect(outfit.length).toBe(3);
  });
});
