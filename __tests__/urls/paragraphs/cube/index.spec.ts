import Urls from '@urls';
import { testUuids } from '../testUuid';

describe('test for paragraphs ', () => {
  describe('cube ', () => {
    it('rank up', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeRankUpParagraphList(false);
      testUuids(res);
    });

    it('option', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeOptionParagraphList(false);
      testUuids(res);
    });

    it('rank up miracle', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeRankUpParagraphList(true);
      testUuids(res);
    });

    it('option miracle', async () => {
      const res = await Urls.Paragraphs.Cubes.getCubeOptionParagraphList(true);
      testUuids(res);
    });
  });
});
