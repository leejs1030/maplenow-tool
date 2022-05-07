import Urls from '@urls';
import { pageEnum } from 'mapletype';

describe('test for pages', () => {
  it('get pages from nexon now', async () => {
    const cube = await Urls.Pages.getPageList(pageEnum.cube);
    const abil = await Urls.Pages.getPageList(pageEnum.abil);
    const outfit = await Urls.Pages.getPageList(pageEnum.outfit);
    const beauty = await Urls.Pages.getPageList(pageEnum.beauty);
    const pet = await Urls.Pages.getPageList(pageEnum.pet);
    const star = await Urls.Pages.getPageList(pageEnum.star);
    expect(cube.length).toBe(4);
    expect(abil.length).toBe(2);
    expect(outfit.length).toBe(3);
    expect(beauty.length).toBe(4);
    expect(pet.length).toBe(3);
    expect(star.length).toBe(5);
  });
});
