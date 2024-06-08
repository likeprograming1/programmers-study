import { describe, expect, test } from "@jest/globals";
import solution from "./solution";

describe("올바르게 괄호를 만들었는가?", () => {
  test('"()()"이 들어가면 true로 나오는가?', () => {
    expect(solution("()()")).toBe(true);
  });
  test('"(())()"이 들어가면 true로 나오는가?', () => {
    expect(solution("(())()")).toBe(true);
  });
  test('")()("이 들어가면 false로 나오는가?', () => {
    expect(solution(")()(")).toBe(false);
  });
  test('"(()("이 들어가면 false로 나오는가?', () => {
    expect(solution("(()(")).toBe(false);
  });
  test('"())((()))(()"이 들어가면 false로 나오는가?', () => {
    expect(solution("())((()))(()")).toBe(false);
  });
});
