// 나의 풀이
function solution(n) {
  var answer = 0

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i
  }
  return answer;
}

// 다른 풀이
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      // i의 제곱이 n일 때 분기처리
        if(i * i == n) { 
            answer += i;
        } else {
            answer += i;
            answer += n / i;    
        }
    }
  }

  return answer;
}

/* 
n이 4일 때, 
(1)  answer += 1
      answer += 4/1 // 4
(2)  answer += 2; // if(i * i == n) 에 충족, 해당 조건문이 없으면 2가 2번 더해짐

answer = 1 + 4 + 2 = 7
*/

/**********************************************************
[풀이 후기]

1. Math.sqrt(n) : n의 제곱근을 반환하는 함수
ex) 
let n = 4
console.log(Math.sqrt(n)) // 2

***********************************************************/
