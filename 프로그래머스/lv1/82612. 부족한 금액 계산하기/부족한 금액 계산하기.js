function solution(price, money, count) {
    let a = 0;
    for (i = 1; i <= count; i++) {
        a += price * i;
    }
    money -= a;
    if(money < 0) {
        return -1 * money;
    } else if (money >= 0) {
        return 0;
    }
}