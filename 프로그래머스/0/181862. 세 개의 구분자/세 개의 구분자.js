const solution = (myStr) => {
    const splitStr = myStr.split(/[abc]/).filter((str) => str);

    return splitStr.length ? splitStr : ["EMPTY"];
}