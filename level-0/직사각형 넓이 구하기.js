// 나의 풀이
function solution(dots) {
  let x = dots.map(el => el[0])
  let y = dots.map(el => el[1])
  
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}

// 다른 사람 풀이
function solution(dots) {
  let x = []
  let y = []
  
  for(let i of dots) {
      x.push(i[0])
      y.push(i[1])
  }
  
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}

/**********************************************************
[풀이 후기]

for … in 과 for … of 차이점

for … in : 객체를 순환하며 속성(key)에 접근
ex1)
let arr = ['black', 'pink', 'red', 'green']
for(let i in arr) {
  console.log(i) // 0, 1, 2, 3 (객체의 속성(key) 접근)
}

ex2) 
let arr = {
  name : "홍길동",
  age  : 24
}
for(let i in arr) {
  console.log(i) // name, age
}

for … of : 배열을 순환

ex1) 
let arr = ['black', 'pink', 'red', 'green']
for(let i of arr) {
    console.log(i) // black, pink, red, green
}

ex2) 
let arr = {
  name : "홍길동",
  age  : 24
}
for(let i of arr) {
  console.log(i) // error
}

***********************************************************/
