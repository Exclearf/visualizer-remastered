import generateArray from '../../../Helpers/ArrayHelper';
import hirestime from 'hirestime';

const bubbleSort = ({ arrSize, loopsNum }) => {
  const executionTimes = [];

  for (let loop = 0; loop < loopsNum; loop++) {
    const getElapsedTime = hirestime();
    const arr = generateArray(arrSize);
    
    for (let i = 0; i < arrSize; i++) {
      for (let j = 0; j < (arrSize - i - 1); j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    executionTimes.push({ loop: loop + 1, executionTime: getElapsedTime() });
  }

  return { executionTimes: executionTimes };
};

export default bubbleSort;