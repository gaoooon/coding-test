function solution(s){
    const pLength = [...s.toLowerCase()].filter((i) => i === "p").length;
    const yLength = [...s.toLowerCase()].filter((i) => i === "y").length;
    
    return pLength === yLength;
}