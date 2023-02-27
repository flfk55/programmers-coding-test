// 나의 풀이
const solution = quiz => quiz.map(el => {
   el = el.replace('=','==') 
   return eval(el) ? "O" : "X"
})

// 다른 사람 풀이
function solution(quiz) {
   return quiz.map(q => {
     const [formula, answer] = q.split('=');
     return eval(formula) === +answer ? 'O' : 'X';
   });
 }

/**********************************************************
[풀이 후기]

1. eval() : 문자열로 작성된 자바스크립트를 실행하는 함수
까먹지 말자~! 🙂

2. split() 결과값을 각 변수에 저장할 수 있음
ex) [formula, answer] = q.split('=');

3. 문자열로 작성된 숫자는 +를 붙여주면 Number형으로 변환됨

ex)
let num = "1";
console.log(1 + num) // 11

let num = "12";
console.log(12 + +num) // 2

***********************************************************/
