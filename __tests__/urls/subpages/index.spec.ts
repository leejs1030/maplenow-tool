import subpages from '@urls/subpages';
import { cubePageEnum } from 'custom-type';

describe('test for subpages', () => {
  it('getCubeSubPageList', async () => {
    const ret = await subpages.getCubeSubPageList(cubePageEnum.rankUp);
    expect(typeof ret.pageUuid).toBe('string');
    expect(Array.isArray(ret.subPages)).toBeTruthy();
  });
});
