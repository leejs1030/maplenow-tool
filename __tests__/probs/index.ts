import CubeProb from '@probs/cube';

describe('test for probs', () => {
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
  });
});
