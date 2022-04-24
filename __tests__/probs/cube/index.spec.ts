import CubeProb from '@probs/cube';
import { cubeNameEnum } from 'custom-type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testRankUpWithCubeName = (res: any, cubeName: string) => {
  expect(res.to.epic.success.content_name).toBe(cubeName);
  expect(res.to.epic.fail.content_name).toBe(cubeName);

  if (!res.to.unique) return;
  expect(res.to.unique.success.content_name).toBe(cubeName);
  expect(res.to.unique.fail.content_name).toBe(cubeName);

  if (!res.to.legendary) return;
  expect(res.to.legendary.success.content_name).toBe(cubeName);
  expect(res.to.legendary.fail.content_name).toBe(cubeName);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  describe('test for normal', () => {
    describe('test for rank up', () => {
      it('test for red cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.RED);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '레드 큐브');
      });

      it('test for black cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.BLACK);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '블랙 큐브');
      });

      it('test for addi cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.ADDI);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '에디셔널 큐브');
      });

      it('test for strange cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.STRANGE);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(1);
        testRankUpWithCubeName(res, '수상한 큐브');
      });

      it('test for master cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.MASTER);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(2);
        testRankUpWithCubeName(res, '장인의 큐브');
      });

      it('test for artisan cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.ARTISAN);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '명장의 큐브');
      });
    });

    describe('test for option', () => {
      it('test for red cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.RED);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '레드 큐브');
      });

      it('test for black cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.BLACK);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '블랙 큐브');
      });

      it('test for addi cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.ADDI);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '에디셔널 큐브');
      });

      it('test for strange cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.STRANGE);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(2);
        testOptionWithCubeName(res, '수상한 큐브');
      });

      it('test for master cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.MASTER);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(3);
        testOptionWithCubeName(res, '장인의 큐브');
      });

      it('test for artisan cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.ARTISAN);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '명장의 큐브');
      });

      it('test for strangeaddi cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.STRANGEADDI);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(1);
        testOptionWithCubeName(res, '수상한 에디셔널 큐브');
      });
    });
  });

  describe('test for miracle time', () => {
    describe('test for rank up', () => {
      it('test for red cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.RED, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '레드 큐브');
      });

      it('test for black cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.BLACK, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '블랙 큐브');
      });

      it('test for addi cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.ADDI, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '에디셔널 큐브');
      });

      it('test for strange cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.STRANGE, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(1);
        testRankUpWithCubeName(res, '수상한 큐브');
      });

      it('test for master cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.MASTER, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(2);
        testRankUpWithCubeName(res, '장인의 큐브');
      });

      it('test for artisan cube', async () => {
        const res = await CubeProb.getCubeRankUpProb(cubeNameEnum.ARTISAN, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '명장의 큐브');
      });
    });

    describe('test for option', () => {
      it('test for red cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.RED, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '레드 큐브');
      });

      it('test for black cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.BLACK, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '블랙 큐브');
      });

      it('test for addi cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.ADDI, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '에디셔널 큐브');
      });

      it('test for strange cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.STRANGE, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(2);
        testOptionWithCubeName(res, '수상한 큐브');
      });

      it('test for master cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.MASTER, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(3);
        testOptionWithCubeName(res, '장인의 큐브');
      });

      it('test for artisan cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.ARTISAN, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '명장의 큐브');
      });

      it('test for strangeaddi cube', async () => {
        const res = await CubeProb.getCubeOptionProb(cubeNameEnum.STRANGEADDI, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(1);
        testOptionWithCubeName(res, '수상한 에디셔널 큐브');
      });
    });
  });
});
