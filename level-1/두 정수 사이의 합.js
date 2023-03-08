// 나의 풀이
function solution(a, b) {
  var answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i
  }
  return answer;
}

// 다른 풀이
function solution(a, b) {
  return (a + b) * (Math.abs(a - b) + 1) / 2
}

/**********************************************************
[풀이 후기]

n ~ m 까지 모두 더하는 문제는 가우스의 덧셈 공식을 사용하자 
(n + m) * Math.abs(n-m) / 2

ex) 3~9까지 모두 더하기 
3 + 9 = 12
2 + 8 = 12 
   …
12 * 5 / 2 = 30

***********************************************************/
