// 나의 풀이
function solution(phone_number) {
  phone_number = [...phone_number]
  for(let i = 0;  i < phone_number.length - 4; i++) phone_number[i] = '*'
  return phone_number.join('')
}

// 다른 풀이 1
function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}
// 다른 풀이 2
function solution(phone_number) {
  var answer = '';
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
}

/**********************************************************
[풀이 후기]

1) 정규표현식 전방탐색/후방탐색
전방탐색 (?=)
(?=) 다음에 나오는 문자 전방만 추출

후방탐색 (?<=)
(?=) 다음에 나오는 문자 후방만 추출

ex) 
"50000원".match(/\d(?=원)/g) // ["0"]
"50000원".match(/\d+(?=원)/) // ["50000"]


2. substring() / slice() / splice() 차이점
String.prototype.substring()인덱스로 문자열 추출

String.prototype.slice() 인덱스로 문자열 추출하여 새로운 객체로 반환
※ Array.prototype.slice()도 있음

Array.prototype.splice() 배열의 요소 삭제, 수정, 추가시 사용

ex)
let number = "0123456789";

number.substring(2) // 23456789, 2번째부터 끝까지 추출
number.substring(-2) // 0123456789
// substring()은 인자가 0보다 작은 경우 0으로, 문자열의 길이보다 큰 경우 문자열의 길이로 처리됨
number.substring(2,3) // 2
number.substring(3,2) // 2, 첫번째 인자가 두번째 인자보다 클 경우 인자가 바뀌어 작동됨

number.slice(2) // 23456789, 2번째부터 끝까지 추출
number.slice(-2) // 89, 끝에서 2번째부터 끝까지 추출

let color = ['red','black','blue']
color.splice(2,1) // ['red','black'] , 'blue’ 삭제
color.splice(2,1,'pink') // ['red','black',’pink’] , 'blue’ ⇒ ‘pink’로 수정
color.splice(3,1,'blue') // ['red','black',’blue’,’pink’] , ‘blue’추가

***********************************************************/
