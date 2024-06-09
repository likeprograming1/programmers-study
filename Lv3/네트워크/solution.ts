export default function solution(n: number, computers: number[][]): number {
  // 방문 여부를 추적하는 배열
  const visited: boolean[] = new Array(n).fill(false);

  // DFS 함수 정의
  const dfs = (node: number) => {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      // 노드가 연결되어 있고 방문하지 않은 경우 DFS 재귀 호출
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  // 네트워크 개수를 추적하는 변수
  let networkCount = 0;
  for (let i = 0; i < n; i++) {
    // 방문되지 않은 노드 발견 시 DFS 시작
    if (!visited[i]) {
      dfs(i);
      networkCount++;
    }
  }

  return networkCount;
}
