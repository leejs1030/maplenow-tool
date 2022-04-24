import BaseProbs from '@src/probs/abil/baseProbs';
import { abilRankOrderEnum, successFailEnum } from 'custom-type';

const getAbilPointRankUpProbs = async (date?: Date) => {
  const res = (await BaseProbs.getAbilPointProbs(date))[0];
  return {
    from: {
      rare: {
        success: res[abilRankOrderEnum.rare][successFailEnum.success],
        fail: res[abilRankOrderEnum.rare][successFailEnum.fail],
      },
      epic: {
        success: res[abilRankOrderEnum.epic][successFailEnum.success],
        fail: res[abilRankOrderEnum.epic][successFailEnum.fail],
      },
      unique: {
        success: res[abilRankOrderEnum.unique][successFailEnum.success],
        fail: res[abilRankOrderEnum.unique][successFailEnum.fail],
      },
    },
  };
};

const getAbilPointOptionProbs = async (date?: Date) => {

};
export default {
  getAbilPointRankUpProbs,
};
