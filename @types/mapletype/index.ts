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
