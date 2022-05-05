import Probs from '@probs';

describe('test for star', () => {
  it('wonder berry current', async () => {
    const res = await Probs.Pets.getWonderBerryProbs();
    expect(Array.isArray(res)).toBeTruthy();
  });

  it('wonder berry old', async () => {
    const res = await Probs.Pets.getWonderBerryProbs(new Date('2022-01-27'));
    expect(Array.isArray(res)).toBeTruthy();
    expect(res[0].trialresult_name).toBe('아로');
    expect(res[0].prob).toBe('3.3200%');
  });

  it('wonder berry very old', async () => {
    try {
      await Probs.Pets.getWonderBerryProbs(new Date('2022-01-26'));
    } catch (err) {
      console.log('ok!'); // eslint-disable-line no-console
      return;
    }
    throw new Error();
  });

  it('crystal sweet current', async () => {
    const res = await Probs.Pets.getCrystalSweetProbs();
    expect(Array.isArray(res)).toBeTruthy();
  });
  it('crystal dream current', async () => {
    const res = await Probs.Pets.getCrystalDreamProbs();
    expect(Array.isArray(res)).toBeTruthy();
  });
});