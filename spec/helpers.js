const getRandomArray = (array = []) =>
  Math.random() < 0.5
    ? getRandomArray([...array, parseInt(Math.random() * 100)])
    : array;

const getNestedArray = (depth = 0, array = []) =>
  depth == 0 
    ? array
    : getNestedArray(depth - 1, [...getRandomArray(), array])

export default getNestedArray;