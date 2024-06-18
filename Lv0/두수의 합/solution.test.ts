import { describe, expect, test } from "@jest/globals";
import { solution } from "./solution";

describe("두수의 합 테스트!", () => {
  test("num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.", () => {
    expect(solution(2, 3)).toBe(5);
  });
  test("num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.", () => {
    expect(solution(100, 2)).toBe(102);
  });
});
