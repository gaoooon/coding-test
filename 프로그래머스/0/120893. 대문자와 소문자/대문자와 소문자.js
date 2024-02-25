function solution(my_string) {
    const spreadStr = [...my_string];
    const changeStr = spreadStr.map((i) => /[a-z]/.test(i) ? i.toUpperCase() : i.toLowerCase()).join("");
    
    return changeStr;
}