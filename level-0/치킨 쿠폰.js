// ���� Ǯ��
function solution(chicken) {
    let ����ġŲ = 0
    let ���� = 0

    while (chicken) {
        ���� += chicken
        chicken = parseInt(���� / 10)
        ����ġŲ += chicken
        ���� %= 10
    }

    return ����ġŲ
}

// ���� Ǯ��2
function solution(chicken) {
    let ����ġŲ = 0
    let ���� = chicken

    while (���� >= 10) {
        ����ġŲ += parseInt(���� / 10)
        ���� = parseInt(���� / 10) + ���� % 10
    }

    return ����ġŲ
}

// �ٸ� ��� Ǯ��
function solution(chicken) {
    let answer = 0;
    let coupon = chicken

    while (coupon >= 10) {
        answer = answer + parseInt(coupon / 10)
        coupon = parseInt(coupon / 10) + coupon % 10
    }

    return answer;
}