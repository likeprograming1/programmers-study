import { describe, expect, test } from "@jest/globals";
import solution from "./solution";

describe("문자열 내에서 P와 Y의 개수가 같은가?", () => {
  test("Payment어떤가?", () => {
    expect(solution("Payment")).toBe(true);
  });
  test("Psychology어떤가?", () => {
    expect(solution("Psychology")).toBe(false);
  });
  test("Play어떤가?", () => {
    expect(solution("Play")).toBe(true);
  });
  test("Display어떤가?", () => {
    expect(solution("Display")).toBe(true);
  });
  test("Apply어떤가?", () => {
    expect(solution("Apply")).toBe(false);
  });
});
