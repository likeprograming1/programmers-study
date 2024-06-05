const Count = (sspl: string[]): number => {
  let result = 0;

  sspl.map((sitem) => {
    if (sitem === "p" || sitem === "P") {
      result += 1;
    } else if (sitem === "y" || sitem === "Y") {
      result -= 1;
    }
  });

  return result;
};

const solution = (s: string) => {
  const sspl: string[] = s.split("");

  return Count(sspl) === 0 ? true : false;
};

export default solution;
