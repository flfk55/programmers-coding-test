// 나의 풀이
function solution(n) {
  var answer = '';

  for (let i = 1; i <= n; i++) {
    answer += i % 2 ? "수" : "박"
  }
  return answer;
}

// 다른 풀이
function solution(n) {
  return "수박".repeat(n / 2) + (n % 2 ? "수" : "")
}

/**********************************************************
[풀이 후기]

String.repeat() 주어진 횟수만큼 문자열 반복
ex)
”수박”.repeat(5) // 수박수박수박수박수박

***********************************************************/
