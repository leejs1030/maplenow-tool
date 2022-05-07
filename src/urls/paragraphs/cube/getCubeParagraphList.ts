import { cubePageEnum } from 'mapletype';
import Subpages from '../../../urls/subpages';
import baseParagraphs from '../baseParagraphs';

const getCubePragraphList = async (selected: cubePageEnum, isMiracle?: boolean, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Cube.getCubeSubPageList(selected);
  if (subPages.length <= 1) return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[0].uuid);
  return baseParagraphs.compareWithDateAndGetParagraphs(pageUuid, subPages, date);
};

const getRankUpParagraphList = async (isMiracle?: boolean, date?: Date) => {
  const selected = isMiracle ? cubePageEnum.miracleRankUp : cubePageEnum.rankUp;
  return getCubePragraphList(selected, isMiracle, date);
};

const getOptionParagraphList = async (isMiracle?: boolean, date?: Date) => {
  const selected = isMiracle ? cubePageEnum.miracleOption : cubePageEnum.option;
  return getCubePragraphList(selected, isMiracle, date);
};

export default {
  getRankUpParagraphList,
  getOptionParagraphList,
};
