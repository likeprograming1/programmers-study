const Count = (sspl: string[]): string => {
  const result = sspl.sort((a, b) => {
    return Number(a) - Number(b);
  });

  return result[0] + " " + result[result.length - 1];
};

const solution = (s: string) => {
  const sspl: string[] = s.split(" ");
  const result = Count(sspl);

  return result;
};

export default solution;
