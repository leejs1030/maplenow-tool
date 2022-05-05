import Probs from '@probs';
import Urls from '@urls';

// eslint-disable-next-line
const testForRankUp = (res: any, isPoint: boolean) => {
  // eslint-disable-next-line
  const trialid_name = isPoint ? '명성치' : '미라클 서큘레이터';
  if (isPoint) {
    expect(res.from.rare.success.content_name).toBe('어빌리티');
    expect(res.from.rare.success.trialid_name).toBe(trialid_name);
    expect(res.from.rare.success.probtable_name).toBe('레어');
    expect(res.from.rare.success.trialresult_name).toBe('에픽');
    expect(res.from.rare.fail.content_name).toBe('어빌리티');
    expect(res.from.rare.fail.trialid_name).toBe(trialid_name);
    expect(res.from.rare.fail.probtable_name).toBe('레어');
    expect(res.from.rare.fail.trialresult_name).toBe('레어');
  }

  expect(res.from.epic.success.content_name).toBe('어빌리티');
  expect(res.from.epic.success.trialid_name).toBe(trialid_name);
  expect(res.from.epic.success.probtable_name).toBe('에픽');
  expect(res.from.epic.success.trialresult_name).toBe('유니크');
  expect(res.from.epic.fail.content_name).toBe('어빌리티');
  expect(res.from.epic.fail.trialid_name).toBe(trialid_name);
  expect(res.from.epic.fail.probtable_name).toBe('에픽');
  expect(res.from.epic.fail.trialresult_name).toBe('에픽');

  expect(res.from.unique.success.content_name).toBe('어빌리티');
  expect(res.from.unique.success.trialid_name).toBe(trialid_name);
  expect(res.from.unique.success.probtable_name).toBe('유니크');
  expect(res.from.unique.success.trialresult_name).toBe('레전드리');
  expect(res.from.unique.fail.content_name).toBe('어빌리티');
  expect(res.from.unique.fail.trialid_name).toBe(trialid_name);
  expect(res.from.unique.fail.probtable_name).toBe('유니크');
  expect(res.from.unique.fail.trialresult_name).toBe('유니크');
};

// eslint-disable-next-line
const testForOption = (res: any, isPoint: boolean) => {
  if (isPoint) {
    expect(res.from.rare.second.length).toBe(1);
    expect(res.from.rare.third.length).toBe(1);
  }
  expect(res.from.epic.second.length).toBe(1);
  expect(res.from.epic.third.length).toBe(1);
  expect(res.from.unique.second.length).toBe(2);
  expect(res.from.unique.third.length).toBe(2);
  expect(res.from.legendary.second.length).toBe(3);
  expect(res.from.legendary.third.length).toBe(3);
};

describe('test for abil', () => {
  describe(' point', () => {
    it(' rank up', async () => {
      const res = await Probs.Abil.getPointRankUpProbs();
      testForRankUp(res, true);
    });

    it(' rank up uuid', async () => {
      const uuidInfos = await Urls.Paragraphs.Abil.getPointParagraphList();
      const func = Probs.Abil.getPointRankUpProbs;
      const [a, b] = await Promise.all([func(), func(uuidInfos)]);
      expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    });

    it('option', async () => {
      const res = await Probs.Abil.getPointOptionProbs();
      testForOption(res, true);
    });

    it('option uuid', async () => {
      const uuidInfos = await Urls.Paragraphs.Abil.getPointParagraphList();
      const func = Probs.Abil.getPointOptionProbs;
      const [a, b] = await Promise.all([func(), func(uuidInfos)]);
      expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    });
  });

  describe('circulator', () => {
    it('rank up', async () => {
      const res = await Probs.Abil.getCirculatorRankUpProbs();
      testForRankUp(res, false);
    });

    it('rank up uuid', async () => {
      const uuidInfos = await Urls.Paragraphs.Abil.getCirculatorParagraphList();
      const func = Probs.Abil.getCirculatorRankUpProbs;
      const [a, b] = await Promise.all([func(), func(uuidInfos)]);
      expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    });

    it('option', async () => {
      const res = await Probs.Abil.getCirculatorOptionProbs();
      testForOption(res, false);
    });

    it('option uuid', async () => {
      const uuidInfos = await Urls.Paragraphs.Abil.getCirculatorParagraphList();
      const func = Probs.Abil.getCirculatorOptionProbs;
      const [a, b] = await Promise.all([func(), func(uuidInfos)]);
      expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    });
  });
});
