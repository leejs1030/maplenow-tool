import { cubePageEnum } from 'custom-type';
import utils from '@libs/utils';
import errors from '@errors';
import baseParagraphs from '@src/urls/paragraphs/baseParagraphs';
import Subpages from '../../subpages';

const getCubePragraphList = async (isMiracle: boolean, selected: cubePageEnum, date?: Date) => {
  const { pageUuid, subPages } = await Subpages.Cubes.getCubeSubPageList(selected);
  let newDate;
  if (!date) newDate = new Date();
  else newDate = new Date(date);
  let i;
  for (i = 0; i < subPages.length; i += 1)
    if (utils.translateDescriptionToDate(subPages[i].description) <= newDate) break;
  if (isMiracle) i = 0;
  else if (i >= subPages.length) throw new errors.InvalidDateError();
  return baseParagraphs.getParagraphsByUuid(pageUuid, subPages[i].uuid);
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
