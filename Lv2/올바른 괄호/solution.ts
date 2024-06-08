const solution = (s: string) => {
  var SSpl = s.split("");
  var result = 0;

  for (var i = 0; i < SSpl.length; i++) {
    if (result <= 0 && SSpl[i] === ")") {
      return false;
    } else {
      SSpl[i] === "(" ? result++ : result--;
    }
    // if (SSpl[i] === "(") {
    //   result++;
    // } else if (result > 0) {
    //   result--;
    // } else {
    //   return false;
    // }
  }

  return result === 0 ? true : false;
};

export default solution;
