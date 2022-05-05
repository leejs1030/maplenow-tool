import errorGenerator from './generator';

const table = {
  NexonNowError: errorGenerator('NexonNowError', 100, 'Fail to load data from Nexon now'),
  InvalidDateError: errorGenerator('InvalidDateError', 101, 'Date is strange!'),
  InvalidCubeNameError: errorGenerator('InvalidCubeNameError', 102, 'Can not find cube name!'),
  InvalidRoyalStyleSeasonError: errorGenerator(
    'InvalidRoyalStyleSeasonError',
    103,
    'Season is strange!',
  ),
};

export default table;
