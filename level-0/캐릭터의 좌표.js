// 나의 풀이
function solution(keyinput, board) {
  let [x,y] = [0,0]
  let board_max = board.map(el => parseInt(el / 2))
  let board_min = [...board_max].map(el => el * -1)
  
  keyinput.forEach(key => {
      switch(key){
          case 'left' : 
          x = board_min[0] >= x ? board_min[0] : x - 1
          break;
          case 'right' : 
          x = board_max[0] <= x ? board_max[0] : x + 1
          break;
          case 'down' : 
          y = board_min[1] >= y ? board_min[1] : y - 1
          break;
          case 'up' : 
          y = board_max[1] <= y ? board_max[1] : y + 1
          break;
      }
})
  
  return [x,y];
}

// 나의 풀이2
function solution(keyinput, board) {
  let res = [0,0]
  
  keyinput.forEach(key => {
      switch(key){
          case 'left' : if(-parseInt(board[0] / 2) < res[0]) res[0]--; break;
          case 'right' : if(parseInt(board[0] / 2) > res[0]) res[0]++; break;
          case 'down' : if(-parseInt(board[1] / 2) < res[1]) res[1]--; break;
          case 'up' : if(parseInt(board[1] / 2) > res[1]) res[1]++; break;
      }
  })
  
  return res;
}

// 다른 사람 풀이
function solution(keyinput, board) {
  let res = [0,0];
  for (let p of keyinput) {
      switch(p){
          case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
          case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
          case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
          case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
      }
  }
  return res;
}
/**********************************************************
[풀이 후기]

1. -1을 곱하지 않고 - 연산자를 사용하여 음수 표현 가능하다.
2. 삼항연산자가 아닌 if 조건문으로 간단하게 값을 할당할 수 있다.
    
***********************************************************/
