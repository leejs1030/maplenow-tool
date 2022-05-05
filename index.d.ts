export interface uuidInfo {
  title: string;
  uuid: string;
  chlidren: any[];
  isLeaf: boolean;
  isPage: boolean;
}

export const enum pageEnum {
  cube = 0,
  abil,
  outfit,
  beauty,
  pet,
  star,
}

export const enum cubePageEnum {
  rankUp,
  option,
  miracleRankUp,
  miracleOption,
}

export const enum abilPageEnum {
  point,
  circulator,
}

export const enum outfitPageEnum {
  royalStyle,
  red,
  black,
}

export const enum beautyPageEnum {
  royalHair,
  royalFace,
  changeRoyalHair,
  changeRoyalFace,
}

export const enum petPageEnum {
  wonderBerry,
  crystalSweet,
  crystalDream,
}

export const enum starPageEnum {
  normal,
  discountThirty,
  multipleFive,
  underTen,
  shining,
}

export const enum cubeOrderEnum {
  red,
  black,
  addi,
  strange,
  master,
  artisan,
  strangeaddi,
}

export const enum cubeRankOrderEnum {
  redToEpic,
  redToUnique,
  redToLegendary,
  blackToEpic,
  blackToUnique,
  blackToLegendary,
  addiToEpic,
  addiToUnique,
  addiToLegendary,
  strangeToEpic,
  masterToEpic,
  masterToUnique,
  artisanToEpic,
  artisanToUnique,
  artisanToLegendary,
  strangeAddiToEpic,
}

export interface AutoTable {
  header: string;
  footer: string;
  themeName: string;
  contentColActive: boolean;
  contentColAlias: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  contentColMergeCells: boolean;
  trialColActive: boolean;
  trialColAlias: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  trialColMergeCells: boolean;
  probtableColActive: boolean;
  probtableColAlias: string;
  probtableColMergeCells: boolean;
  trialresultColActive: boolean;
  trialresultColAlias: string;
  countColActive: boolean;
  countColAlias: string;
  probColActive: boolean;
  probColAlias: string;
  realProbColActive: boolean;
  realProbColAlias: string;
  columnOrder: { columnId: string; customColumn: boolean }[];
  showRealProbSearchDtRange: boolean;
  showRealProbUpdateDt: boolean;
  usedProbtables: { contentid: string; trialid: string; probtableid: string }[];
  realProbSearchDateRangeExposureMode: string;
  allowTableToggle: boolean;
  customColumns: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  showProbVersionCreateDate: boolean;
  probVersionCreateDate: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  realprobWarningMode: string;
}

export interface AutoTableItem {
  content_name: string;
  trialid_name: string;
  probtable_name: string;
  trialresult_name: string;
  prob: string;
  custom_columns: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  count: number;
  realprob: string;
  windowStart: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  windowEnd: string;
  updateDt: string;
  showRealprobWarning: boolean;
}

export interface probInfo {
  contentid: string;
  trialid: string;
  probtableid: string;
}

export const enum cubeNameEnum {
  RED = 'red',
  BLACK = 'black',
  ADDI = 'addi',
  STRANGE = 'strange',
  MASTER = 'master',
  ARTISAN = 'artisan',
  STRANGEADDI = 'strangeaddi',
}

export const enum successFailEnum {
  success,
  fail,
}

export const enum abilRankOrderEnum {
  rare,
  epic,
  unique,
  legendary,
}

export const enum masterPieceNameEnum {
  red = 'red',
  black = 'black',
}

export type paragraphsType = { uuid: string; autoTable: AutoTable }[];

export interface fullUuidInfo {
  pageUuid: string;
  subPageUuid: string;
  paragraphs: paragraphsType;
}

declare type defaultInst = {
  Menus: {
    getMenu: () => Promise<import('axios').AxiosResponse<any, any>>;
  };
  Pages: {
    getPageList: (pageName: pageEnum) => Promise<uuidInfo[]>;
  };
  Paragraphs: {
    Cube: {
      getRankUpParagraphList: (
        isMiracle?: boolean | undefined,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getOptionParagraphList: (
        isMiracle?: boolean | undefined,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
    };
    Abil: {
      getAbilParagraphList: (
        selected: abilPageEnum,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getPointParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getCirculatorParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
    };
    Outfit: {
      getRoyalStyleParagraphList: (
        season?: number | undefined,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getMasterPieceParagraphList: (
        pieceName: masterPieceNameEnum,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getRedPieceParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getBlackPieceParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
    };
    Beauty: {
      getRoyalHairParagraphList: (
        isChange: boolean,
        year?: number | undefined,
        month?: string | number | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getRoyalFaceParagraphList: (
        isChange: boolean,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
    };
    Pet: {
      getWonderBerryParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getCrystalSweetParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getCrystalDreamParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getPetParagraphList: (
        petPage: petPageEnum,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
    };
    Star: {
      getNormalParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getDiscountThirtyParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getMultipleFiveParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getShiningParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getUnderTenParagraphList: (date?: Date | undefined) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
      getStarParagraphList: (
        starPage: starPageEnum,
        date?: Date | undefined,
      ) => Promise<{
        pageUuid: string;
        subPageUuid: string;
        paragraphs: {
          uuid: string;
          autoTable: AutoTable;
        }[];
      }>;
    };
  };
  SubPages: {
    Cube: {
      getCubeSubPageList: (cubePage: cubePageEnum) => Promise<{
        pageUuid: string;
        subPages: any;
      }>;
    };
    Abil: {
      getAbilSubPageList: (abilPage: abilPageEnum) => Promise<{
        pageUuid: string;
        subPages: any;
      }>;
    };
    Outfit: {
      getOutfitSubPageList: (outfitPage: outfitPageEnum) => Promise<{
        pageUuid: string;
        subPages: any;
      }>;
    };
    Beauty: {
      getBeautySubPageList: (beautyPage: beautyPageEnum) => Promise<{
        pageUuid: string;
        subPages: any;
      }>;
    };
    Pet: {
      getPetSubPageList: (petPage: petPageEnum) => Promise<{
        pageUuid: string;
        subPages: any;
      }>;
    };
    Star: {
      getStarSubPageList: (starPage: starPageEnum) => Promise<{
        pageUuid: string;
        subPages: any;
      }>;
    };
  };
  Probs: {
    Cube: {
      getCubeOptionProbs: (
        cubeName: cubeNameEnum,
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getCubeRankUpProbs: (
        cubeName: cubeNameEnum,
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        to: {
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getStrangeaddiCubeOptionProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getArtisanCubeRankUpProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        to: {
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getArtisanCubeOptionProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getMasterCubeRankUpProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        to: {
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getMasterCubeOptionProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getStrangeCubeRankUpProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        to: {
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getStrangeCubeOptionProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getAddiCubeRankUpProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        to: {
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getAddiCubeOptionProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getBlackCubeRankUpProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        to: {
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getBlackCubeOptionProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getRedCubeRankUpProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        to: {
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
      getRedCubeOptionProbs: (
        isMiracle?: boolean | undefined,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        second: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
        third: {
          rare: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          epic: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          unique: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
          legendary: {
            success: AutoTableItem;
            fail: AutoTableItem;
          };
        };
      }>;
    };
    Abil: {
      getPointRankUpProbs: (date?: Date | fullUuidInfo | undefined) => Promise<
        | {
            from: {
              rare: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              epic: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              unique: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
            };
          }
        | {
            from: {
              epic: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              unique: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              rare?: undefined;
            };
          }
      >;
      getPointOptionProbs: (date?: Date | fullUuidInfo | undefined) => Promise<
        | {
            from: {
              rare: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              epic: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              unique: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              legendary: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
            };
          }
        | {
            from: {
              epic: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              unique: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              legendary: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              rare?: undefined;
            };
          }
      >;
      getCirculatorRankUpProbs: (date?: Date | fullUuidInfo | undefined) => Promise<
        | {
            from: {
              rare: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              epic: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              unique: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
            };
          }
        | {
            from: {
              epic: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              unique: {
                success: AutoTableItem;
                fail: AutoTableItem;
              };
              rare?: undefined;
            };
          }
      >;
      getCirculatorOptionProbs: (date?: Date | fullUuidInfo | undefined) => Promise<
        | {
            from: {
              rare: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              epic: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              unique: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              legendary: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
            };
          }
        | {
            from: {
              epic: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              unique: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              legendary: {
                second: AutoTableItem[];
                third: AutoTableItem[];
              };
              rare?: undefined;
            };
          }
      >;
    };
    Outfit: {
      getRoyalStyleProbs: (
        season?: number | fullUuidInfo | undefined,
        date?: Date | undefined,
      ) => Promise<{
        male: AutoTableItem[][];
        female: AutoTableItem[][];
      }>;
      getMasterPieceProbs: (
        pieceName: masterPieceNameEnum,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        male: {
          hat: AutoTableItem[];
          cloth: AutoTableItem[];
          capeAndGloves: AutoTableItem[];
          shoes: AutoTableItem[];
          weapon: AutoTableItem[];
        };
        female: {
          hat: AutoTableItem[];
          cloth: AutoTableItem[];
          capeAndGloves: AutoTableItem[];
          shoes: AutoTableItem[];
          weapon: AutoTableItem[];
        };
      }>;
      getRedPieceProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        male: {
          hat: AutoTableItem[];
          cloth: AutoTableItem[];
          capeAndGloves: AutoTableItem[];
          shoes: AutoTableItem[];
          weapon: AutoTableItem[];
        };
        female: {
          hat: AutoTableItem[];
          cloth: AutoTableItem[];
          capeAndGloves: AutoTableItem[];
          shoes: AutoTableItem[];
          weapon: AutoTableItem[];
        };
      }>;
      getBlackPieceProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        male: {
          hat: AutoTableItem[];
          cloth: AutoTableItem[];
          capeAndGloves: AutoTableItem[];
          shoes: AutoTableItem[];
          weapon: AutoTableItem[];
        };
        female: {
          hat: AutoTableItem[];
          cloth: AutoTableItem[];
          capeAndGloves: AutoTableItem[];
          shoes: AutoTableItem[];
          weapon: AutoTableItem[];
        };
      }>;
    };
    Beauty: {
      getRoyalHairProbs: (
        year?: number | fullUuidInfo | undefined,
        month?: string | number | undefined,
      ) => Promise<{
        male: AutoTableItem[];
        female: AutoTableItem[];
      }>;
      getRoyalChangeHairProbs: (
        year?: number | fullUuidInfo | undefined,
        month?: string | number | undefined,
      ) => Promise<{
        male: AutoTableItem[];
        female: AutoTableItem[];
      }>;
      getRoyalFaceProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        male: AutoTableItem[];
        female: AutoTableItem[];
      }>;
      getRoyalChangeFaceProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        male: AutoTableItem[];
        female: AutoTableItem[];
      }>;
    };
    Pet: {
      getWonderBerryProbs: (date?: Date | fullUuidInfo | undefined) => Promise<AutoTableItem[]>;
      getCrystalSweetProbs: (date?: Date | fullUuidInfo | undefined) => Promise<AutoTableItem[]>;
      getCrystalDreamProbs: (date?: Date | fullUuidInfo | undefined) => Promise<AutoTableItem[]>;
      getPetProbs: (
        petPage: petPageEnum,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<AutoTableItem[]>;
    };
    Star: {
      getDiscountThirtyProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        catch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
        noCatch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
      }>;
      getMultipleFiveProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        catch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
        noCatch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
      }>;
      getNormalProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        catch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
        noCatch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
      }>;
      getUnderTenProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        catch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
        noCatch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
      }>;
      getShiningProbs: (date?: Date | fullUuidInfo | undefined) => Promise<{
        catch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
        noCatch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
      }>;
      getStarProbs: (
        starPage: starPageEnum,
        date?: Date | fullUuidInfo | undefined,
      ) => Promise<{
        catch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
        noCatch: {
          success: AutoTableItem;
          fail: AutoTableItem;
          destroy: AutoTableItem;
        }[];
      }>;
    };
  };
};

const maplenow: defaultInst;
export default maplenow;
