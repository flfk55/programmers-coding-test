// 나의 풀이
function solution(s) {
  let idx = parseInt(s.length / 2)
  return s.length % 2 ? s[idx] : s.substring(s[idx-1], s[idx+1])
}

// 다른 풀이1
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) -1, s.length % 2? 1: 2 )
}

// 다른 풀이2
function solution(s) {
  let idx = parseInt(s.length / 2)
  return s.length % 2 ? s[idx] : s[idx - 1] + s[idx]
}

/**********************************************************
[풀이 후기]

substr() 인덱스에서 개수만큼 반환
ex) ’012345’.substr(2,3) // 234

***********************************************************/
