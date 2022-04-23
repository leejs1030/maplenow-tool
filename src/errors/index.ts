import errorGenerator from './generator';

const table = {
  NexonNowError: errorGenerator('NexonNowError', 100, 'Fail to load data from Nexon now'),
};

export default table;
