// 나의 풀이
function solution(absolutes, signs) {
  let answer = ""
  for (let i in signs) {
    answer += signs[i] ? "+" : "-"
    answer += absolutes[i]
  }
  return eval(answer)
}

// 다른 풀이
function solution(absolutes, signs) {
  let answer = 0
  for (let i in signs) {
    answer += absolutes[i] * (signs[i] ? 1 : -1)
  }
  return answer
}

/**********************************************************
[풀이 후기]

point!

1. 양수, 음수 계산은 *1, *-1 로 가능하다!
2. reduce() 함수의 3번째 인자는 해당 배열의 index이다.

***********************************************************/
