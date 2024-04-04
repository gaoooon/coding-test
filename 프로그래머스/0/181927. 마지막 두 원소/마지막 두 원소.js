function solution(num_list) {
    const lastItemFirst = num_list[num_list.length - 2];
    const lastItemSecond = num_list[num_list.length - 1];
    
    const addItem = lastItemFirst < lastItemSecond ? lastItemSecond - lastItemFirst : lastItemSecond * 2; 
    
    const answer = [...num_list, addItem];
    return answer;
}