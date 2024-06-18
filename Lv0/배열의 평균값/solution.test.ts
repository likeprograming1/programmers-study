import { describe, expect, test } from "@jest/globals";
import solution from "./solution";

describe("배열의 평균값 구하기!!", () => {
  test("numbers의 원소들의 평균 값은 5.5입니다.", () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
  });
  test("numbers의 원소들의 평균 값은 94.0입니다.", () => {
    expect(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])).toBe(94.0);
  });
});
