import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { StatisticsStyled } from "./StyledComponents/StatisticsStyled";
import bubbleSort from "./SortingAlgorithms/StatisticAlgorithms/BubbleSort";
import insertionSort from "./SortingAlgorithms/StatisticAlgorithms/InsertionSort";
import mergeSort from "./SortingAlgorithms/StatisticAlgorithms/MergeSort";
import quickSort from "./SortingAlgorithms/StatisticAlgorithms/QuickSort";

export const Statistics = ({ position }) => {
  const [selectedOption, setSelectedOption] = useState(""); 
  const [arrSize, setArrSize] = useState("");
  const [loopsNum, setLoopsNum] = useState("");
  const [resultData, setResultData] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleArrSizeChange = (event) => {
    setArrSize(event.target.value);
  };

  const handleLoopsNumChange = (event) => {
    setLoopsNum(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Button Clicked");
  
    let result;
    switch (selectedOption) {
      case "bubbleSort":
        result = bubbleSort({ arrSize, loopsNum });
        break;
      case "insertionSort":
        result = insertionSort({ arrSize, loopsNum });
        break;
      case "mergeSort":
        result = mergeSort({ arrSize, loopsNum });
        break;
      case "quickSort":
        result = quickSort({ arrSize, loopsNum });
        break;
      default:
        console.error("Invalid sorting algorithm selected");
        return;
    }
  
    console.log(result);
  
    setResultData(result);
  };
  useEffect(() => {
    console.log("Result Data updated:", resultData);
  }, [resultData]);


  return (
    <div>
      <StatisticsStyled position={position}>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select sorting algorithm</option>
          <option value="bubbleSort">Bubble sort</option>
          <option value="insertionSort">Insertion sort</option>
          <option value="mergeSort">Merge sort</option>
          <option value="quickSort">Quick sort</option>
        </select>

        <input
          type="number"
          placeholder="size of array"
          value={arrSize}
          onChange={handleArrSizeChange}
        />

        <input
          type="number"
          placeholder="number of loops"
          value={loopsNum}
          onChange={handleLoopsNumChange}
        />

        <button onClick={handleButtonClick}>Submit</button>

        {resultData && (
          <div className="result-data">
            <LineChart width={600} height={400} data={resultData.executionTimes}>
              <XAxis dataKey="loop" label={{ value: 'Loop', position: 'bottom' }} />
              <YAxis label={{ value: 'ms', angle: -90, position: 'insideLeft' }} />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Line type="monotone" dataKey="executionTime" stroke="#8884d8" />
            </LineChart>
          </div>
        )}
      </StatisticsStyled>
    </div>
  );
};
