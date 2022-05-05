import Urls from '@urls';
import {
  abilPageEnum,
  beautyPageEnum,
  cubePageEnum,
  outfitPageEnum,
  petPageEnum,
  starPageEnum,
} from 'custom-type';

describe('test for subpages', () => {
  it('getCubeSubPageList', async () => {
    const ret = await Urls.SubPages.Cubes.getCubeSubPageList(cubePageEnum.rankUp);
    expect(typeof ret.pageUuid).toBe('string');
    expect(Array.isArray(ret.subPages)).toBeTruthy();
  });

  it('getAbilSubPageList', async () => {
    const ret = await Urls.SubPages.Abils.getAbilSubPageList(abilPageEnum.point);
    expect(typeof ret.pageUuid).toBe('string');
    expect(Array.isArray(ret.subPages)).toBeTruthy();
  });

  it('getOutfitSubPageList', async () => {
    const res = await Urls.SubPages.Outfits.getOutfitSubPageList(outfitPageEnum.royalStyle);
    expect(typeof res.pageUuid).toBe('string');
    expect(Array.isArray(res.subPages)).toBeTruthy();
  });

  it('getBeautySubPageList', async () => {
    const res = await Urls.SubPages.Beauties.getBeautySubPageList(beautyPageEnum.royalHair);
    const res1 = await Urls.SubPages.Beauties.getBeautySubPageList(beautyPageEnum.royalFace);
    const res2 = await Urls.SubPages.Beauties.getBeautySubPageList(beautyPageEnum.changeRoyalHair);
    const res3 = await Urls.SubPages.Beauties.getBeautySubPageList(beautyPageEnum.changeRoyalFace);
    expect(typeof res.pageUuid).toBe('string');
    expect(Array.isArray(res.subPages)).toBeTruthy();
    expect(Array.isArray(res1.subPages)).toBeTruthy();
    expect(Array.isArray(res2.subPages)).toBeTruthy();
    expect(Array.isArray(res3.subPages)).toBeTruthy();
  });

  it('getPetSubPageList', async () => {
    const wonder = await Urls.SubPages.Pets.getStarSubPageList(petPageEnum.wonderBerry);
    expect(typeof wonder.pageUuid).toBe('string');
    expect(Array.isArray(wonder.subPages)).toBeTruthy();
    const sweet = await Urls.SubPages.Pets.getStarSubPageList(petPageEnum.crystalSweet);
    expect(typeof sweet.pageUuid).toBe('string');
    expect(Array.isArray(sweet.subPages)).toBeTruthy();
    const dream = await Urls.SubPages.Pets.getStarSubPageList(petPageEnum.crystalDream);
    expect(typeof dream.pageUuid).toBe('string');
    expect(Array.isArray(dream.subPages)).toBeTruthy();
  });

  it('getStarSubPageList', async () => {
    const normal = await Urls.SubPages.Stars.getStarSubPageList(starPageEnum.normal);
    expect(typeof normal.pageUuid).toBe('string');
    expect(Array.isArray(normal.subPages)).toBeTruthy();
    const discountThirty = await Urls.SubPages.Stars.getStarSubPageList(
      starPageEnum.discountThirty,
    );
    expect(typeof discountThirty.pageUuid).toBe('string');
    expect(Array.isArray(discountThirty.subPages)).toBeTruthy();
    const multipleFive = await Urls.SubPages.Stars.getStarSubPageList(starPageEnum.multipleFive);
    expect(typeof multipleFive.pageUuid).toBe('string');
    expect(Array.isArray(multipleFive.subPages)).toBeTruthy();
    const underTen = await Urls.SubPages.Stars.getStarSubPageList(starPageEnum.underTen);
    expect(typeof underTen.pageUuid).toBe('string');
    expect(Array.isArray(underTen.subPages)).toBeTruthy();
    const shining = await Urls.SubPages.Stars.getStarSubPageList(starPageEnum.shining);
    expect(typeof shining.pageUuid).toBe('string');
    expect(Array.isArray(shining.subPages)).toBeTruthy();
  });
});
