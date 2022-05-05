import getParagraphsByUuid from './getParagraphsByUuid';
import compareWithDateAndGetParagraphs from './compareWithDateAndGetParagraphs';

export default {
  ...getParagraphsByUuid,
  ...compareWithDateAndGetParagraphs,
};
