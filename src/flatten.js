const flatten = (array) => Array.isArray(array) 
                            ? [].concat(...array.map(flatten)) 
                            : array;

export default flatten