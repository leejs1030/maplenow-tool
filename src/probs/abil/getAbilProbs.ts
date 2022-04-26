import BaseProbs from '@src/probs/abil/baseProbs';
import { successFailEnum } from 'custom-type';

const getAbilRankUpProbs = async (isPoint: boolean, date?: Date) => {
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

const getAbilOptionProbs = async (isPoint: boolean, date?: Date) => {
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

const getAbilPointRankUpProbs = async (date?: Date) => getAbilRankUpProbs(true, date);
const getAbilPointOptionProbs = async (date?: Date) => getAbilOptionProbs(true, date);
const getAbilCirculatorRankUpProbs = async (date?: Date) => getAbilRankUpProbs(false, date);
const getAbilCirculatorOptionProbs = async (date?: Date) => getAbilOptionProbs(false, date);

export default {
  getAbilPointRankUpProbs,
  getAbilPointOptionProbs,
  getAbilCirculatorRankUpProbs,
  getAbilCirculatorOptionProbs,
};