import CubeProb from '@probs/cube';

// const testRankUpWithCubeName = (res: any, cubeName: string) => {
//   const secondRare = res.second.rare;
//   expect(secondRare.success.trialresult_name).not.toBe(secondRare.fail.trialresult_name);
//
//   expect(res.second.rare.success.content_name).toBe(cubeName);
//   expect(res.second.rare.fail.content_name).toBe(cubeName);
//   expect(res.third.rare.success.content_name).toBe(cubeName);
//   expect(res.third.rare.fail.content_name).toBe(cubeName);
//
//   if (!res.second.epic) return;
//   expect(res.second.epic.success.content_name).toBe(cubeName);
//   expect(res.second.epic.fail.content_name).toBe(cubeName);
//   expect(res.third.epic.success.content_name).toBe(cubeName);
//   expect(res.third.epic.fail.content_name).toBe(cubeName);
//
//   if (!res.second.unique) return;
//   expect(res.second.unique.success.content_name).toBe(cubeName);
//   expect(res.second.unique.fail.content_name).toBe(cubeName);
//   expect(res.third.unique.success.content_name).toBe(cubeName);
//   expect(res.third.unique.fail.content_name).toBe(cubeName);
//
//   if (!res.second.legendary) return;
//   expect(res.second.legendary.success.content_name).toBe(cubeName);
//   expect(res.second.legendary.fail.content_name).toBe(cubeName);
//   expect(res.third.legendary.success.content_name).toBe(cubeName);
//   expect(res.third.legendary.fail.content_name).toBe(cubeName);
// };

const testOptionWithCubeName = (res: any, cubeName: string) => {
  const secondRare = res.second.rare;
  expect(secondRare.success.trialresult_name).not.toBe(secondRare.fail.trialresult_name);

  expect(res.second.rare.success.content_name).toBe(cubeName);
  expect(res.second.rare.fail.content_name).toBe(cubeName);
  expect(res.third.rare.success.content_name).toBe(cubeName);
  expect(res.third.rare.fail.content_name).toBe(cubeName);

  if (!res.second.epic) return;
  expect(res.second.epic.success.content_name).toBe(cubeName);
  expect(res.second.epic.fail.content_name).toBe(cubeName);
  expect(res.third.epic.success.content_name).toBe(cubeName);
  expect(res.third.epic.fail.content_name).toBe(cubeName);

  if (!res.second.unique) return;
  expect(res.second.unique.success.content_name).toBe(cubeName);
  expect(res.second.unique.fail.content_name).toBe(cubeName);
  expect(res.third.unique.success.content_name).toBe(cubeName);
  expect(res.third.unique.fail.content_name).toBe(cubeName);

  if (!res.second.legendary) return;
  expect(res.second.legendary.success.content_name).toBe(cubeName);
  expect(res.second.legendary.fail.content_name).toBe(cubeName);
  expect(res.third.legendary.success.content_name).toBe(cubeName);
  expect(res.third.legendary.fail.content_name).toBe(cubeName);
};

describe('test for cube', () => {
  describe('test for rank up', () => {
    it('test for red cube', async () => {
      const ret: { [index: string]: any } = await CubeProb.getRedCubeRankUpProb();
      const keys = Object.keys(ret);
      expect(keys.length).toBe(6);
      keys.forEach((key) => {
        expect(ret[key].content_name).toBe('레드 큐브');
      });
    });

    it('test for black cube', async () => {
      const ret: { [index: string]: any } = await CubeProb.getBlackCubeRankUpProb();
      const keys = Object.keys(ret);
      expect(keys.length).toBe(6);
      keys.forEach((key) => {
        expect(ret[key].content_name).toBe('블랙 큐브');
      });
    });

    it('test for addi cube', async () => {
      const ret: { [index: string]: any } = await CubeProb.getAddiCubeRankUpProb();
      const keys = Object.keys(ret);
      expect(keys.length).toBe(6);
      keys.forEach((key) => {
        expect(ret[key].content_name).toBe('에디셔널 큐브');
      });
    });

    it('test for strange cube', async () => {
      const ret: { [index: string]: any } = await CubeProb.getStrangeCubeRankUpProb();
      const keys = Object.keys(ret);
      expect(keys.length).toBe(2);
      keys.forEach((key) => {
        expect(ret[key].content_name).toBe('수상한 큐브');
      });
    });

    it('test for master cube', async () => {
      const ret: { [index: string]: any } = await CubeProb.getMasterCubeRankUpProb();
      const keys = Object.keys(ret);
      expect(keys.length).toBe(4);
      keys.forEach((key) => {
        expect(ret[key].content_name).toBe('장인의 큐브');
      });
    });

    it('test for artisan cube', async () => {
      const ret: { [index: string]: any } = await CubeProb.getArtisanCubeRankUpProb();
      const keys = Object.keys(ret);
      expect(keys.length).toBe(6);
      keys.forEach((key) => {
        expect(ret[key].content_name).toBe('명장의 큐브');
      });
    });
  });

  describe('test for option', () => {
    it('test for red cube', async () => {
      const res = await CubeProb.getRedCubeOptionProb();
      const cubeName = '레드 큐브';
      testOptionWithCubeName(res, cubeName);
    });

    it('test for black cube', async () => {
      const res = await CubeProb.getBlackCubeOptionProb();
      const cubeName = '블랙 큐브';
      testOptionWithCubeName(res, cubeName);
    });

    it('test for addi cube', async () => {
      const res = await CubeProb.getAddiCubeOptionProb();
      const cubeName = '에디셔널 큐브';
      testOptionWithCubeName(res, cubeName);
    });

    it('test for strange cube', async () => {
      const res = await CubeProb.getStrangeCubeOptionProb();
      const cubeName = '수상한 큐브';
      testOptionWithCubeName(res, cubeName);
    });

    it('test for master cube', async () => {
      const res = await CubeProb.getMasterCubeOptionProb();
      const cubeName = '장인의 큐브';
      testOptionWithCubeName(res, cubeName);
    });

    it('test for artisan cube', async () => {
      const res = await CubeProb.getArtisanCubeOptionProb();
      const cubeName = '명장의 큐브';
      testOptionWithCubeName(res, cubeName);
    });

    it('test for strangeaddi cube', async () => {
      const res = await CubeProb.getStrangeaddiCubeOptionProb();
      const cubeName = '수상한 에디셔널 큐브';
      testOptionWithCubeName(res, cubeName);
    });
  });
});
