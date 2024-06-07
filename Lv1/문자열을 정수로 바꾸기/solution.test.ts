import { describe, expect, test } from "@jest/globals";
import solution from "./solution";

describe("문자열을 정수로 바꾸기", () => {
  test("`1234`는 1234로 바뀌는가", () => {
    expect(solution("1234")).toBe(1234);
  });
  test("`-1234`는 -1234로 바뀌는가", () => {
    expect(solution("-1234")).toBe(-1234);
  });
});
