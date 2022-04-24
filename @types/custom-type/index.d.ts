declare module 'custom-type'{
  declare interface uuidInfo{
    title: string;
    uuid: string;
    chlidren: any[];
    isLeaf: boolean;
    isPage: boolean;
  }
  declare const enum pageEnum {
    base = 1,
    cube = 1,
    abil,
    outfit,
    beauty,
    pet,
    star
  }
  declare const enum cubePageEnum {
    base = 100,
    rankUp = 100,
    option,
    miracleRankUp,
    miracleOption,
  }
  declare const enum abilPageEnum {
    base = 200,
    point = 200,
    circulator
  }
  declare const enum outfitPageEnum {
    base = 300,
    royalStyle = 300,
    redPiece,
    blackPiece
  }
  declare const enum beautyPageEnum {
    base = 400,
    royalHair = 400,
    royalFace,
    changeRoyalHair,
    changeRoyalFace,
  }
  declare const enum petPageEnum {
    base = 500,
    wonderBerry = 500,
    crystalSweet,
    crystalDream
  }
  declare const enum starPageEnum {
    base = 600,
    normal = 600,
    multipleFive,
    underTen,
    shining
  }
  declare const enum cubeOrderEnum{
    red,
    black,
    addi,
    strange,
    master,
    artisan,
    strangeaddi
  }
  declare const enum cubeRankOrderEnum{
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
    strangeAddiToEpic
  }
  declare interface AutoTable {
    header: string,
    footer: string,
    themeName: string,
    contentColActive: boolean,
    contentColAlias: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    contentColMergeCells: boolean,
    trialColActive: boolean,
    trialColAlias: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    trialColMergeCells: boolean,
    probtableColActive: boolean,
    probtableColAlias: string,
    probtableColMergeCells: boolean,
    trialresultColActive: boolean,
    trialresultColAlias: string,
    countColActive: boolean,
    countColAlias: string,
    probColActive: boolean,
    probColAlias: string,
    realProbColActive: boolean,
    realProbColAlias: string,
    columnOrder: { columnId: string, customColumn: boolean }[],
    showRealProbSearchDtRange: boolean,
    showRealProbUpdateDt: boolean,
    usedProbtables: { contentid: string, trialid: string, probtableid: string }[],
    realProbSearchDateRangeExposureMode: string,
    allowTableToggle: boolean,
    customColumns: any[], // eslint-disable-line @typescript-eslint/no-explicit-any
    showProbVersionCreateDate: boolean,
    probVersionCreateDate: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    realprobWarningMode: string,
  }

  declare interface AutoTableItem{
    content_name: string,
    trialid_name: string,
    probtable_name: string,
    trialresult_name: string,
    prob: string,
    custom_columns: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    count: number,
    realprob: string,
    windowStart: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    windowEnd: string,
    updateDt: string,
    showRealprobWarning: boolean
  }
  declare interface probInfo{
    contentid: string,
    trialid: string,
    probtableid: string,
  }
  declare const enum cubeNameEnum{
    RED = 'red',
    BLACK = 'black',
    ADDI = 'addi',
    STRANGE = 'strange',
    MASTER = 'master',
    ARTISAN = 'artisan',
    STRANGEADDI = 'strangeaddi'
  }
}
