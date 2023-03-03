// 나의 풀이
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}

/**********************************************************
[풀이 후기]

2진수 → 10진수
parseInt(1010, 2) //10
※ String.ParseInt() : 특정 진수의 정수를 반환하는 함수

10진수 → 2진수
Number(10).toString(2) // 1010
※ String.toString() : 문자열 반환 함수

***********************************************************/
