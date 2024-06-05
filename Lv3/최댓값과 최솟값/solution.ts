export default function solution(triangle) {
  // 삼각형 배열의 깊이
  const n = triangle.length;

  // dp 배열을 triangle 배열의 복사본으로 초기화
  const dp = triangle.map((row) => [...row]);

  // 맨 아래 행에서부터 시작하여 dp 배열을 갱신
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  // 최종 결과는 dp[0][0]에 저장됨
  return dp[0][0];
}
