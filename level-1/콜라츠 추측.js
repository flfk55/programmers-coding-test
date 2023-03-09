// 나의 풀이
function solution(num) {
   let answer = 0;

   while (num != 1) {
      if (num % 2) {
         num = num * 3 + 1
         answer++
      } else {
         num /= 2
         answer++
      }
   }

   return answer > 500 ? -1 : answer
}

// 다른 풀이
function solution(num) {
   let answer = 0;

   while (num != 1 && answer != 500) {
      num % 2 ? num = num * 3 + 1 : num /= 2
      answer++
   }

   return num == 1 ? answer : -1
}

/**********************************************************
[풀이 후기]

1. 중복되는 코드가 없게 작성한다.
2. if ~ else 문을 삼항연산자로 간단하게 표현보자 

***********************************************************/
