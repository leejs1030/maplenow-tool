import Probs from '@probs';

describe('test for star', () => {
  it('test for normal', async () => {
    const res = await Probs.Star.getStarNormalProbs();
    expect(res.catch[0].success.probtable_name).toBe('0성');
    expect(res.noCatch[0].success.probtable_name).toBe('0성');

    const res1 = await Probs.Star.getStarNormalProbs(new Date('2022-04-21'));
    expect(res1.catch[0].success.probtable_name).toBe('0성');
    expect(res1.noCatch[0].success.probtable_name).toBe('0성');
    expect(res1.catch[0].success.count).toBe(12394);
    expect(res1.noCatch[0].success.count).toBe(100974);

    expect(res1.catch[13].success.count).toBe(3117);
    expect(res1.catch[13].fail.count).toBe(5070);
    expect(res1.catch[13].destroy.count).toBe(120);

    expect(res1.noCatch[15].success.count).toBe(16104);
    expect(res1.noCatch[15].fail.count).toBe(36344);
    expect(res1.noCatch[15].destroy.count).toBe(1090);
  });

  it('test for 30% discount', async () => {
    const res = await Probs.Star.getStarDiscountThirtyProbs();
    expect(res.catch[0].success.probtable_name).toBe('0성');
    expect(res.noCatch[0].success.probtable_name).toBe('0성');

    const res1 = await Probs.Star.getStarDiscountThirtyProbs(new Date('2022-04-21'));
    expect(res1.catch[0].success.probtable_name).toBe('0성');
    expect(res1.noCatch[0].success.probtable_name).toBe('0성');
    expect(res1.catch[0].success.count).toBe(136962);
    expect(res1.catch[0].fail.count).toBe(317);
  });

  it('test for multipleFive', async () => {
    const res = await Probs.Star.getStarMultipleFiveProbs();
    expect(res.catch[0].success.probtable_name).toBe('0성');
    expect(res.noCatch[0].success.probtable_name).toBe('0성');
  });

  it('test for underTen', async () => {
    const res = await Probs.Star.getStarUnderTenProbs();
    expect(res.catch[0].success.probtable_name).toBe('0성');
    expect(res.noCatch[0].success.probtable_name).toBe('0성');
  });

  it('test for underTen', async () => {
    const res = await Probs.Star.getStarShiningProbs();
    expect(res.catch[0].success.probtable_name).toBe('0성');
    expect(res.noCatch[0].success.probtable_name).toBe('0성');
  });
});
