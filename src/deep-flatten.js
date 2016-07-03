const trampoline = (f) => (...args) => {
  let res = f(args);
  while (res instanceof Function) {
      res = res();
  }
  return res;
}

const flatten = ([first, ...rest], res = []) => {  
  if (first === undefined) return res;

  if (Array.isArray(first)) {
    return () => flatten([...first, ...rest], res) // noprotect
  } else {
    return () => flatten(rest, res.concat(first))  // noprotect
  }
};

export default (array) => trampoline(flatten)(array)