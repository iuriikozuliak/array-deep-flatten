import flatten     from './flatten';
import deepFlatten from './deep-flatten';

// polyfill isArray, just in case
if (!Array.isArray) {
  Array.isArray = (v) => Object.prototype.toString.call(v) === '[object Array]';
}

export default (array, isDeep) => {
  if (!array || !Array.isArray(array)) {
    throw new Error('Please pass an Array');
  }

 return isDeep ? deepFlatten(array) : flatten(array); 
}