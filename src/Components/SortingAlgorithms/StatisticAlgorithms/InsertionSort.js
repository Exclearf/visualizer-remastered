import generateArray from '../../../Helpers/ArrayHelper';
import hirestime from 'hirestime';

const insertionSort = ({ arrSize, loopsNum }) => {
  const executionTimes = [];

  for (let loop = 0; loop < loopsNum; loop++) {
    const getElapsedTime = hirestime();
    const arr = generateArray(arrSize);

    if (arrSize <= 1) {
      executionTimes.push({ loop: loop + 1, executionTime: getElapsedTime() });
      return { executionTimes };
    }

    for (let i = 1; i < arrSize; i++) {
      let currentElement = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = currentElement;
    }

    executionTimes.push({ loop: loop + 1, executionTime: getElapsedTime() });
  }

  return { executionTimes };
};

export default insertionSort;
