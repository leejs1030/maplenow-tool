import Urls from '@urls';
import { abilPageEnum, beautyPageEnum, cubePageEnum, outfitPageEnum } from 'custom-type';

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
});
