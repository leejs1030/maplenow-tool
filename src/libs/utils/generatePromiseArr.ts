import { probInfo } from 'custom-type';
import axios from '@libs/axios';
import generateUrl from '@libs/utils/generateUrl';

const generatePromiseArr = async (
  pageUuid: string,
  subPageUuid: string,
  paragraphs: { uuid: string, autoTable: any }[],
) =>
  paragraphs.map((value) =>
    Promise.all(
      value.autoTable.usedProbtables.map((row: probInfo) =>
        axios.get(generateUrl.generateProbUrl(pageUuid, subPageUuid, value.uuid, row)),
      ),
    ),
  );

export default {
  generatePromiseArr,
};
