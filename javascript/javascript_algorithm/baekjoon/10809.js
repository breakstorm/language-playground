function solution(list) {
    var alphabet = [];
    for(var i = 0; i < 26 ; i++) {
        alphabet[i] = 1;
    }
    alphabet.fill(-1, 0, 25);

    list = list.toLowerCase();
    var index;
    for(var i = 0; i < list.length; i++) {
        // console.log(list[i].charCodeAt())
        index = list[i].charCodeAt() - 97;
        if(alphabet[index] === -1) alphabet[index] = i;
    }
    console.log(alphabet);
    return alphabet;
}

solution("baekjoon");