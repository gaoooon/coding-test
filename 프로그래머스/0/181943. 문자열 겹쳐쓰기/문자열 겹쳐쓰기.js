function solution(my_string, overwrite_string, s) {
    const splittedString = [...my_string];
    splittedString.splice(s, overwrite_string.length, overwrite_string);
    
    return splittedString.join("");
}