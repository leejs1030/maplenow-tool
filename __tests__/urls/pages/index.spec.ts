import pages from '@urls/pages';
import { pageEnum } from 'custom-type';

describe('test for pages', () => {
  it('get pages from nexon now', async () => {
    const cube = await pages.getPageList(pageEnum.cube);
    const abil = await pages.getPageList(pageEnum.abil);
    expect(cube.length === 4).toBeTruthy();
    expect(abil.length === 2).toBeTruthy();
  });
});
