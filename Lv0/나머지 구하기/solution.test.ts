import { describe, expect, test } from "@jest/globals";
import { solution } from "./solution";

describe("나머지 구하기 ", () => {
  test("num1이 3, num2가 2이므로 3을 2로 나눈 나머지 1을 return 합니다.", () => {
    expect(solution(3, 2)).toBe(1);
  });
  test("num1이 10, num2가 5이므로 10을 5로 나눈 나머지 0을 return 합니다.", () => {
    expect(solution(10, 5)).toBe(0);
  });
});
