import { describe, expect, test } from "@jest/globals";
import { multiplication } from "./mul";

describe("곱하기 연산 테스트!!", () => {
  test("3 곱하기 5는 15입니다.", () => {
    expect(multiplication(3, 5)).toBe(15);
  });
  test("1000 곱하기 777는 777000입니다.", () => {
    expect(multiplication(1000, 777)).toBe(777000);
  });
  test("0 곱하기 5는 0입니다.", () => {
    expect(multiplication(0, 5)).toBe(0);
  });
});
