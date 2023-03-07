// 나의 풀이
function solution(n) {
  let i = 2
  while(n % i != 1) {
      i++
  }
  return i
}