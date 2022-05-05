import Probs from '@probs';
import { masterPieceNameEnum } from 'custom-type';
import Urls from '../../../src/urls';

const testForMasterPiece = async (pieceName: masterPieceNameEnum) => {
  const res = await Probs.Outfit.getMasterPieceProbs(pieceName);

  expect(Array.isArray(res.male.hat)).toBeTruthy();
  expect(Array.isArray(res.male.cloth)).toBeTruthy();
  expect(Array.isArray(res.male.capeAndGloves)).toBeTruthy();
  expect(Array.isArray(res.male.shoes)).toBeTruthy();
  expect(Array.isArray(res.male.weapon)).toBeTruthy();

  expect(Array.isArray(res.female.hat)).toBeTruthy();
  expect(Array.isArray(res.female.cloth)).toBeTruthy();
  expect(Array.isArray(res.female.capeAndGloves)).toBeTruthy();
  expect(Array.isArray(res.female.shoes)).toBeTruthy();
  expect(Array.isArray(res.female.weapon)).toBeTruthy();
  expect(res.female.hat[0].probtable_name.slice(-4)).toBe('(여자)');
};

describe('test for outfit', () => {
  it('test for royal', async () => {
    const res = await Probs.Outfit.getRoyalStyleProbs();
    expect(Array.isArray(res.male)).toBeTruthy();
    expect(Array.isArray(res.female)).toBeTruthy();
  });

  it('royal uuid', async () => {
    const uuidInfos = await Urls.Paragraphs.Outfit.getRoyalStyleParagraphList();
    const func = Probs.Outfit.getRoyalStyleProbs;
    const [a, b] = await Promise.all([func(), func(uuidInfos)]);
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });

  it('test for masterpiece', async () => {
    await testForMasterPiece(masterPieceNameEnum.red);
    await testForMasterPiece(masterPieceNameEnum.black);
  });
});
