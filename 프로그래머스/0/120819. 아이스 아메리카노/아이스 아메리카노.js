function solution(money) {
    const price = 5500;
    let count = 0;
          
    while (money >= price) {
        count++;
        money -= price;
        
    }
        
    return [count, money];
}