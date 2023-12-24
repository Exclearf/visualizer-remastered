import generateArray from '../../../Helpers/ArrayHelper';
import hirestime from 'hirestime';

const mergeSort = ({ arrSize, loopsNum }) => {
  const executionTimes = [];

  const merge = (arr, left, middle, right) => {
    const leftArr = arr.slice(left, middle + 1);
    const rightArr = arr.slice(middle + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }

    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  };

  const mergeSortRecursive = (arr, left, right) => {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);

      mergeSortRecursive(arr, left, middle);
      mergeSortRecursive(arr, middle + 1, right);

      merge(arr, left, middle, right);
    }
  };

  for (let loop = 0; loop < loopsNum; loop++) {
    const getElapsedTime = hirestime();
    const arr = generateArray(arrSize);

    if (arrSize <= 1) {
      executionTimes.push({ loop: loop + 1, executionTime: getElapsedTime() });
      return { executionTimes };
    }

    mergeSortRecursive(arr, 0, arrSize - 1);
    executionTimes.push({ loop: loop + 1, executionTime: getElapsedTime() });
  }

  return { executionTimes };
};

export default mergeSort;