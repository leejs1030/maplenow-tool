import Urls from '@urls';
import { abilPageEnum, cubePageEnum } from 'custom-type';

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
});
