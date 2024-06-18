import { describe, expect, test } from "@jest/globals";
import { solution } from "./solution";

describe("2022년 기준 나이 구하기! ", () => {
  test("2022년 기준 40살이므로 1983년생입니다.", () => {
    expect(solution(1983)).toBe(40);
  });
  test("2022년 기준 23살이므로 2000년생입니다.", () => {
    expect(solution(2000)).toBe(23);
  });
});
