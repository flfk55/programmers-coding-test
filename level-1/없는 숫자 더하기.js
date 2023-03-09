// 나의 풀이
function solution(numbers) {
  let answer = 0
  for (let i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i
  }
  return answer
}

// 다른 풀이
// 0~9까지의 합에서 number 배열 요소의 합을 뺀다.
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur)
}