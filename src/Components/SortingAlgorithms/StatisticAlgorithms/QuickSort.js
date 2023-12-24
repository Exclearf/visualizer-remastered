import generateArray from '../../../Helpers/ArrayHelper';
import hirestime from 'hirestime';

const quickSort = ({ arrSize, loopsNum }) => {
  const executionTimes = [];

  for (let loop = 0; loop < loopsNum; loop++) {
    const getElapsedTime = hirestime();
    const arr = generateArray(arrSize);

    if (arrSize <= 1) {
      executionTimes.push({ loop: loop + 1, executionTime: getElapsedTime() });
      return { executionTimes };
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arrSize; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }

    executionTimes.push({ loop: loop + 1, executionTime: getElapsedTime() });
  }

  return { executionTimes };
};

export default quickSort;