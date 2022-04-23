import errorGenerator from './generator';

const table = {
  NexonNowError: errorGenerator(
    'NexonNowError',
    100,
    'Fail to load data from Nexon now',
  ),
  InvalidDateError: errorGenerator('InvalidDateError', 101, 'Date is strange!'),
};

export default table;
