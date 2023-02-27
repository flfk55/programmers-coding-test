// 나의 풀이
function solution(numlist, n) {
  var answer = []
  numlist. sort((a,b)=> b - a)
  var arr = numlist.map(el => Math.abs(el - n))
  var sort_arr = arr.slice().sort((a,b) => a - b)
  
  sort_arr.forEach(el => {
      answer.push(numlist[arr.indexOf(el)])
      arr[arr.indexOf(el)] = ''
  })
  
  return answer                    
}

// 다른 사람 풀이
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
  /*
  js의 sort함수는 음수를 반환하면 a가 먼저, 양수면 b가 먼저 순서가 되도록 짜여져 있음
  b랑 a의 거리가 같은 상황 즉 Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면 
  ||연산자 뒤가 실행되면서 오름차순으로 정렬함
  */
}

/**********************************************************
[풀이 후기]

JS의 sort()함수와 || 연산자의 특징을 이해하자

1. sort((a,b) ⇒ a-b)
반환 조건에서 음수를 반환하면 a가 먼저, 양수를 반환하면 b가 먼저 순서가 결정됨

2. || 연산자는 boolean만 반환하지 않음
→ 방향으로 연산을 진행하고 가장 먼저 참(true)형태를 가진 값이 나오면 그 피연산자를 반환하고 연산을 끝냄(이후 피연산자는 확인하지 않고 종료)
    
    ex)
    3 || 4 // 3
    const n1 = true;
    n1 || 8 // true
    false || 4 // 4
    0 || 9 //9
    
***********************************************************/
