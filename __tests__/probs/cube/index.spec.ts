import Probs from '@probs';
import { cubeNameEnum } from 'mapletype';
import Urls from '../../../src/urls';

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
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.RED);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '레드 큐브');
      });

      it('red uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(false);
        const func = Probs.Cube.getRedCubeRankUpProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('test for black cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.BLACK);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '블랙 큐브');
      });

      it('black uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(false);
        const func = Probs.Cube.getBlackCubeRankUpProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('test for addi cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.ADDI);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '에디셔널 큐브');
      });

      it('addi uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(false);
        const func = Probs.Cube.getAddiCubeRankUpProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('test for strange cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.STRANGE);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(1);
        testRankUpWithCubeName(res, '수상한 큐브');
      });

      it('strange uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(false);
        const func = Probs.Cube.getStrangeCubeRankUpProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('test for master cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.MASTER);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(2);
        testRankUpWithCubeName(res, '장인의 큐브');
      });

      it('master uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(false);
        const func = Probs.Cube.getMasterCubeRankUpProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('test for artisan cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.ARTISAN);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '명장의 큐브');
      });

      it('artisan uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(false);
        const func = Probs.Cube.getArtisanCubeRankUpProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });
    });

    describe('test for option', () => {
      it('test for red cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.RED);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '레드 큐브');
      });

      it('test for black cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.BLACK);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '블랙 큐브');
      });

      it('test for addi cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.ADDI);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '에디셔널 큐브');
      });

      it('test for strange cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.STRANGE);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(2);
        testOptionWithCubeName(res, '수상한 큐브');
      });

      it('test for master cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.MASTER);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(3);
        testOptionWithCubeName(res, '장인의 큐브');
      });

      it('test for artisan cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.ARTISAN);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '명장의 큐브');
      });

      it('test for strangeaddi cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.STRANGEADDI);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(1);
        testOptionWithCubeName(res, '수상한 에디셔널 큐브');
      });

      it('red uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(false);
        const func = Probs.Cube.getRedCubeOptionProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('black uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(false);
        const func = Probs.Cube.getBlackCubeOptionProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('addi uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(false);
        const func = Probs.Cube.getAddiCubeOptionProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('master uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(false);
        const func = Probs.Cube.getMasterCubeOptionProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('artisan uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(false);
        const func = Probs.Cube.getArtisanCubeOptionProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('strangeaddi uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(false);
        const func = Probs.Cube.getStrangeaddiCubeOptionProbs;
        const [a, b] = await Promise.all([func(false), func(false, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });
    });
  });

  describe('test for miracle time', () => {
    describe('test for rank up', () => {
      it('test for red cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.RED, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '레드 큐브');
      });

      it('test for black cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.BLACK, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '블랙 큐브');
      });

      it('test for addi cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.ADDI, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '에디셔널 큐브');
      });

      it('test for strange cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.STRANGE, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(1);
        testRankUpWithCubeName(res, '수상한 큐브');
      });

      it('test for master cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.MASTER, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(2);
        testRankUpWithCubeName(res, '장인의 큐브');
      });

      it('test for artisan cube', async () => {
        const res = await Probs.Cube.getCubeRankUpProbs(cubeNameEnum.ARTISAN, true);
        const keys = Object.keys(res.to);
        expect(keys.length).toBe(3);
        testRankUpWithCubeName(res, '명장의 큐브');
      });

      it('red uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(true);
        const func = Probs.Cube.getRedCubeRankUpProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('black uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(true);
        const func = Probs.Cube.getBlackCubeRankUpProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('addi uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(true);
        const func = Probs.Cube.getAddiCubeRankUpProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('master uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(true);
        const func = Probs.Cube.getMasterCubeRankUpProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('artisan uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getRankUpParagraphList(true);
        const func = Probs.Cube.getArtisanCubeRankUpProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });
    });

    describe('test for option', () => {
      it('test for red cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.RED, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '레드 큐브');
      });

      it('test for black cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.BLACK, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '블랙 큐브');
      });

      it('test for addi cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.ADDI, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '에디셔널 큐브');
      });

      it('test for strange cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.STRANGE, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(2);
        testOptionWithCubeName(res, '수상한 큐브');
      });

      it('test for master cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.MASTER, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(3);
        testOptionWithCubeName(res, '장인의 큐브');
      });

      it('test for artisan cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.ARTISAN, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(4);
        testOptionWithCubeName(res, '명장의 큐브');
      });

      it('test for strangeaddi cube', async () => {
        const res = await Probs.Cube.getCubeOptionProbs(cubeNameEnum.STRANGEADDI, true);
        const keys = Object.keys(res.second);
        expect(keys.length).toBe(1);
        testOptionWithCubeName(res, '수상한 에디셔널 큐브');
      });

      it('red uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(true);
        const func = Probs.Cube.getRedCubeOptionProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('black uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(true);
        const func = Probs.Cube.getBlackCubeOptionProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('addi uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(true);
        const func = Probs.Cube.getAddiCubeOptionProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('master uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(true);
        const func = Probs.Cube.getMasterCubeOptionProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('artisan uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(true);
        const func = Probs.Cube.getArtisanCubeOptionProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });

      it('strangeaddi uuid', async () => {
        const uuidInfos = await Urls.Paragraphs.Cube.getOptionParagraphList(true);
        const func = Probs.Cube.getStrangeaddiCubeOptionProbs;
        const [a, b] = await Promise.all([func(true), func(true, uuidInfos)]);
        expect(JSON.stringify(a)).toBe(JSON.stringify(b));
      });
    });
  });
});
