import { cubePageEnum } from 'custom-type';
import Subpages from '@urls/subpages';
import baseParagraphs from '../baseParagraphs';

const getCubePragraphList = async (isMiracle: boolean, selected: cubePageEnum, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Cubes.getCubeSubPageList(selected);
  if (subPages.length <= 1) return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[0].uuid);
  return baseParagraphs.compareWithDateAndGetParagraphs(pageUuid, subPages, date);
};

const getCubeRankUpParagraphList = async (isMiracle: boolean, date?: Date) => {
  const selected = isMiracle ? cubePageEnum.miracleRankUp : cubePageEnum.rankUp;
  return getCubePragraphList(isMiracle, selected, date);
};

const getCubeOptionParagraphList = async (isMiracle: boolean, date?: Date) => {
  const selected = isMiracle ? cubePageEnum.miracleOption : cubePageEnum.option;
  return getCubePragraphList(isMiracle, selected, date);
};

export default {
  getCubeRankUpParagraphList,
  getCubeOptionParagraphList,
};
