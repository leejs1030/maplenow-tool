import { probInfo } from 'mapletype';
import myAxios from '../myaxios';
import generateUrl from './generateUrl';

const generatePromiseArr = async (
  pageUuid: string,
  subPageUuid: string,
  paragraphs: { uuid: string; autoTable: any }[],
) =>
  paragraphs.map((value) =>
    Promise.all(
      value.autoTable.usedProbtables.map((row: probInfo) =>
        myAxios.get(generateUrl.generateProbUrl(pageUuid, subPageUuid, value.uuid, row)),
      ),
    ),
  );

export default {
  generatePromiseArr,
};
