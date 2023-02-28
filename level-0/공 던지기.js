// 나의 풀이
function solution(numbers, k) {
   var answer = 0;
   var j = 0;

   for (let i = 0; i < k; i++) {
      if (j > numbers.length) {
         j = Math.floor(j - numbers.length)
      }
      answer = numbers[j]
      j += 2
   }

   return answer
}

// 다른 사람 풀이
function solution(numbers, k) {
   return numbers[((k - 1) * 2) % numbers.length]
}

/**********************************************************
[풀이 후기]
 
  % 연산자를 사용할 수 있음을 기억하자 
    
***********************************************************/
