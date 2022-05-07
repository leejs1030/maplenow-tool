import { fullUuidInfo, masterPieceNameEnum } from 'mapletype';
import BaseProbs from './baseProbs';

const getMasterPieceProbs = async (pieceName: masterPieceNameEnum, date?: Date | fullUuidInfo) => {
  const res = await BaseProbs.getMasterPieceProbs(pieceName, date);
  return {
    male: {
      hat: res[0][0],
      cloth: res[1][0],
      capeAndGloves: res[2][0],
      shoes: res[3][0],
      weapon: res[4][0],
    },
    female: {
      hat: res[5][0],
      cloth: res[6][0],
      capeAndGloves: res[7][0],
      shoes: res[8][0],
      weapon: res[9][0],
    },
  };
};

const getRedPieceProbs = async (date?: Date | fullUuidInfo) =>
  getMasterPieceProbs(masterPieceNameEnum.red, date);
const getBlackPieceProbs = async (date?: Date | fullUuidInfo) =>
  getMasterPieceProbs(masterPieceNameEnum.black, date);

export default {
  getMasterPieceProbs,
  getRedPieceProbs,
  getBlackPieceProbs,
};
