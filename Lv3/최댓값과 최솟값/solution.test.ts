import { describe, expect, test } from "@jest/globals";
import solution from "./solution";

describe("정수 삼각형", () => {
  test('[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]이 들어가면 "0 5"로 나오는가?', () => {
    expect(
      solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])
    ).toBe(30);
  });
});
