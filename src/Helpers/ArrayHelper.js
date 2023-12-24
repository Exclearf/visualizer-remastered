function generateArray(arrSize) {
  const randomArray = Array.from({ length: arrSize }, (_, index) => index + 1);

  for (let i = randomArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }

  return randomArray;
}

export default generateArray;