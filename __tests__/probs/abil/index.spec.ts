import Probs from '../../../src/probs';

describe('test for abil', () => {
  describe('test for point', () => {
    it('test for rank up', async () => {
      console.log(await Probs.Abils.getAbilPointRankUpProbs());
    });
  });
});
