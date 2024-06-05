import { describe, expect, test } from "@jest/globals";
import solution from "./solution";

describe("문자열 내에서 P와 Y의 개수가 같은가?", () => {
  test('"3 5 0 1"이 들어가면 "0 5"로 나오는가?', () => {
    expect(solution("3 5 0 1")).toBe("0 5");
  });
  test('"1 2 3 4"이 들어가면 "1 4"로 나오는가?', () => {
    expect(solution("1 2 3 4")).toBe("1 4");
  });
  test('"-1 -2 -3 -4"이 들어가면 "-4 -1"로 나오는가?', () => {
    expect(solution("-1 -2 -3 -4")).toBe("-4 -1");
  });
  test('"-1 -1"이 들어가면 "0 5"로 나오는가?', () => {
    expect(solution("-1 -1")).toBe("-1 -1");
  });
});
