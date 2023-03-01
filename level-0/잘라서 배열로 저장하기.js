// 나의 풀이
function solution(my_str, n) {
  var answer = [];
  
  for(let i = 0; i < my_str.length; i+= n) {
      answer.push(my_str.slice(i, n + i))
  }
  return answer;
}

// 다른 사람 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`,"g"))
}

/**********************************************************
[풀이 후기]

1. String.match() : 정규표현식에 일치하는 모든 값을 배열로 반환하는 메소드
2. 정규표현식으로 문자를 자를 수 있다. 
3. 정규표현식에 변수를 사용하고 싶은 경우 RegExp 객체의 생성자 호출로 정규표현식을 만든다. 
    
***********************************************************/
