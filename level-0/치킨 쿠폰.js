// 나의 풀이
function solution(chicken) {
    let 서비스치킨 = 0
    let 쿠폰 = 0

    while (chicken) {
        쿠폰 += chicken
        chicken = parseInt(쿠폰 / 10)
        서비스치킨 += chicken
        쿠폰 %= 10
    }

    return 서비스치킨
}

// 나의 풀이2
function solution(chicken) {
    let 서비스치킨 = 0
    let 쿠폰 = chicken

    while (쿠폰 >= 10) {
        서비스치킨 += parseInt(쿠폰 / 10)
        쿠폰 = parseInt(쿠폰 / 10) + 쿠폰 % 10
    }

    return 서비스치킨
}

// 다른 사람 풀이
function solution(chicken) {
    let answer = 0;
    let coupon = chicken

    while (coupon >= 10) {
        answer = answer + parseInt(coupon / 10)
        coupon = parseInt(coupon / 10) + coupon % 10
    }

    return answer;
}