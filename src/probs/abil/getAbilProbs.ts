import { fullUuidInfo, successFailEnum } from 'custom-type';
import BaseProbs from './baseProbs';

const getAbilRankUpProbs = async (isPoint: boolean, date?: Date | fullUuidInfo) => {
  if (isPoint) {
    const res = (await BaseProbs.getAbilPointProbs(date))[0];
    return {
      from: {
        rare: {
          success: res[0][successFailEnum.success],
          fail: res[0][successFailEnum.fail],
        },
        epic: {
          success: res[1][successFailEnum.success],
          fail: res[1][successFailEnum.fail],
        },
        unique: {
          success: res[2][successFailEnum.success],
          fail: res[2][successFailEnum.fail],
        },
      },
    };
  }
  const res = (await BaseProbs.getAbilCirculatorProbs(date))[0];
  return {
    from: {
      epic: {
        success: res[0][successFailEnum.success],
        fail: res[0][successFailEnum.fail],
      },
      unique: {
        success: res[1][successFailEnum.success],
        fail: res[1][successFailEnum.fail],
      },
    },
  };
};

const getAbilOptionProbs = async (isPoint: boolean, date?: Date | fullUuidInfo) => {
  if (isPoint) {
    const res = (await BaseProbs.getAbilPointProbs(date))[1];
    return {
      from: {
        rare: {
          second: res[0],
          third: res[1],
        },
        epic: {
          second: res[2],
          third: res[3],
        },
        unique: {
          second: res[4],
          third: res[5],
        },
        legendary: {
          second: res[6],
          third: res[7],
        },
      },
    };
  }
  const res = (await BaseProbs.getAbilCirculatorProbs(date))[1];
  return {
    from: {
      epic: {
        second: res[0],
        third: res[1],
      },
      unique: {
        second: res[2],
        third: res[3],
      },
      legendary: {
        second: res[4],
        third: res[5],
      },
    },
  };
};

const getPointRankUpProbs = async (date?: Date | fullUuidInfo) => getAbilRankUpProbs(true, date);
const getPointOptionProbs = async (date?: Date | fullUuidInfo) => getAbilOptionProbs(true, date);
const getCirculatorRankUpProbs = async (date?: Date | fullUuidInfo) =>
  getAbilRankUpProbs(false, date);
const getCirculatorOptionProbs = async (date?: Date | fullUuidInfo) =>
  getAbilOptionProbs(false, date);

export default {
  getPointRankUpProbs,
  getPointOptionProbs,
  getCirculatorRankUpProbs,
  getCirculatorOptionProbs,
};
