// 나의 풀이
function solution(s) {
  return [...s.matchAll(/p/gi)].length == [...s.matchAll(/y/gi)].length
}

// 다른 풀이
function solution(s) {
  return s.toUpperCase().split('P').length == s.toUpperCase().split('Y').length
}

/**********************************************************
[풀이 후기]

1. match() 함수는 값이 없을 경우 null을 반환하지 않고 오류가 발생하기 때문에 
   matchAll()을 사용한다. matchAll()은 배열로 출력해야지 사용 가능하다.
2. split() 함수로 몇 개 있는지 확인 가능
3. 대소문자 구분없이 문자 개수 출력할 때 toUpperCase()를 사용할 수 있다.

***********************************************************/
