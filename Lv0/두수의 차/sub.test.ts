import { describe, expect, test } from "@jest/globals";
import { subtraction } from "./sub";

describe("뺄셈 연산 테스트!!", () => {
  test("5 뺴기 3는 2입니다.", () => {
    expect(subtraction(5, 3)).toBe(2);
  });
  test("1000 빼기 777는 223입니다.", () => {
    expect(subtraction(1000, 777)).toBe(223);
  });
  test("0 빼기 5는 -5입니다.", () => {
    expect(subtraction(0, 5)).toBe(-5);
  });
});
