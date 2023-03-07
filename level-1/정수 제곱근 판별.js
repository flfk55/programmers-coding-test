// 나의 풀이
function solution(n) {
  let sqrt = Math.sqrt(n) 
  return sqrt == parseInt(sqrt) ? (sqrt + 1) ** 2 : -1
}

// 다른 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1
}

/**********************************************************
[풀이 후기]

1. Number.isInteger() : 주어진 값이 정수인지 판별하는 함수
ex) 
Number.isInteger(3.255) // false
Number.isInteger(3) // true

2. ** : 거듭제곱 연산자
ex) 2 ** 2 // 4

***********************************************************/
