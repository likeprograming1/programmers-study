import { describe, expect, test } from "@jest/globals";
import { multiplication } from "./solution";

describe("몫 구하기 테스트!!", () => {
  test("10을 5로 나눈 몫 2를 return 합니다.", () => {
    expect(multiplication(10, 5)).toBe(2);
  });
  test(" 7을 2로 나눈 몫 3을 return 합니다.", () => {
    expect(multiplication(7, 2)).toBe(3);
  });
});
