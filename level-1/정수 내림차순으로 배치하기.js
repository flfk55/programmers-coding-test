// 나의 풀이
function solution(n) {
  return +[...String(n)].sort((a,b) => b-a).join('')
}