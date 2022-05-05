import Probs from '../../../src/probs';

const testForRankUp = (res: any, isPoint: boolean) => {
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
  describe('test for point', () => {
    it('test for point rank up', async () => {
      const res = await Probs.Abil.getAbilPointRankUpProbs();
      testForRankUp(res, true);
    });

    it('test for point option', async () => {
      const res = await Probs.Abil.getAbilPointOptionProbs();
      testForOption(res, true);
    });

    it('test for circulator rank up', async () => {
      const res = await Probs.Abil.getAbilCirculatorRankUpProbs();
      testForRankUp(res, false);
    });

    it('test for circulator option', async () => {
      const res = await Probs.Abil.getAbilCirculatorOptionProbs();
      testForOption(res, false);
    });
  });
});
