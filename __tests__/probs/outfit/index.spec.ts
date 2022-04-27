import Probs from '@probs';
import { masterPieceNameEnum } from 'custom-type';

const testForMasterPiece = async (pieceName: masterPieceNameEnum) => {
  const res = await Probs.Outfits.getMasterPieceProbs(pieceName);
  expect(Array.isArray(res.male.hat)).toBeTruthy();
  expect(Array.isArray(res.male.cloth)).toBeTruthy();
  expect(Array.isArray(res.male.capeAndGloves)).toBeTruthy();
  expect(Array.isArray(res.male.shoes)).toBeTruthy();
  expect(Array.isArray(res.male.weapon)).toBeTruthy();
  expect(res.male.hat[0].probtable_name.substring(-4)).toBe('(남자)');

  expect(Array.isArray(res.female.hat)).toBeTruthy();
  expect(Array.isArray(res.female.cloth)).toBeTruthy();
  expect(Array.isArray(res.female.capeAndGloves)).toBeTruthy();
  expect(Array.isArray(res.female.shoes)).toBeTruthy();
  expect(Array.isArray(res.female.weapon)).toBeTruthy();
  expect(res.male.hat[0].probtable_name.substring(-4)).toBe('(여자)');
};

describe('test for outfit', () => {
  it('test for royal', async () => {
    const res = await Probs.Outfits.getRoyalProbs();
    expect(Array.isArray(res.male)).toBeTruthy();
    expect(Array.isArray(res.female)).toBeTruthy();
  });

  it('test for masterpiece', async () => {
    await testForMasterPiece(masterPieceNameEnum.red);
    await testForMasterPiece(masterPieceNameEnum.black);
  });
});
