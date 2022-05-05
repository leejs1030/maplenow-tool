import Probs from '@probs';

describe('test for beauty', () => {
  describe(' normal', () => {
    describe(' hair', () => {
      it('current', async () => {
        const res = await Probs.Beauty.getRoyalHairProbs();
        res.male.forEach((value) => {
          expect(value.content_name).toBe('로얄 헤어');
          expect(value.probtable_name.includes('남자')).toBeTruthy();
        });
        res.female.forEach((value) => {
          expect(value.content_name).toBe('로얄 헤어');
          expect(value.probtable_name.includes('여자')).toBeTruthy();
        });
      });
      it('month - 1', async () => {
        const res = await Probs.Beauty.getRoyalHairProbs(2022, 1);
        expect(res.male[0].trialresult_name).toBe('메모리 헤어');
        res.male.forEach((value) => {
          expect(value.content_name).toBe('로얄 헤어');
          expect(value.probtable_name.includes('남자')).toBeTruthy();
        });
        expect(res.female[0].trialresult_name).toBe('캔디 드롭 헤어');
        res.female.forEach((value) => {
          expect(value.content_name).toBe('로얄 헤어');
          expect(value.probtable_name.includes('여자')).toBeTruthy();
        });
      });
    });
    describe('  face', () => {
      it('current', async () => {
        const res = await Probs.Beauty.getRoyalFaceProbs();
        res.male.forEach((value) => {
          expect(value.content_name).toBe('로얄 성형');
          expect(value.probtable_name.includes('남자')).toBeTruthy();
        });
        res.female.forEach((value) => {
          expect(value.content_name).toBe('로얄 성형');
          expect(value.probtable_name.includes('여자')).toBeTruthy();
        });
      });
      it('20220403 = 2022.03.03. 10시 이후', async () => {
        const res = await Probs.Beauty.getRoyalFaceProbs(new Date('2022-04-03'));
        expect(res.male[0].trialresult_name).toBe('스위트 캔디 얼굴');
        res.male.forEach((value) => {
          expect(value.content_name).toBe('로얄 성형');
          expect(value.probtable_name.includes('남자')).toBeTruthy();
        });
        expect(res.female[0].trialresult_name).toBe('스위트 캔디 얼굴');
        res.female.forEach((value) => {
          expect(value.content_name).toBe('로얄 성형');
          expect(value.probtable_name.includes('여자')).toBeTruthy();
        });
      });
    });
  });

  describe(' change', () => {
    describe(' hair', () => {
      it('current', async () => {
        const res = await Probs.Beauty.getRoyalChangeHairProbs();
        expect(res.male[0].trialresult_name).toBe('치즈볼 헤어'); // 2022 05 05 기준
        res.male.forEach((value) => {
          expect(value.content_name).toBe('로얄 헤어');
          expect(value.probtable_name.includes('남자')).toBeTruthy();
        });
        expect(res.female[0].trialresult_name).toBe('포르테 헤어'); // 2022 05 05 기준
        res.female.forEach((value) => {
          expect(value.content_name).toBe('로얄 헤어');
          expect(value.probtable_name.includes('여자')).toBeTruthy();
        });
      });
    });
    describe('  face', () => {
      it('current', async () => {
        const res = await Probs.Beauty.getRoyalChangeFaceProbs();
        expect(res.male[0].trialresult_name).toBe('차차 얼굴'); // 2022 05 05 기준
        res.male.forEach((value) => {
          expect(value.content_name).toBe('로얄 성형');
          expect(value.probtable_name.includes('남자')).toBeTruthy();
        });
        expect(res.female[0].trialresult_name).toBe('차차 얼굴'); // 2022 05 05 기준
        res.female.forEach((value) => {
          expect(value.content_name).toBe('로얄 성형');
          expect(value.probtable_name.includes('여자')).toBeTruthy();
        });
      });
    });
  });
});
