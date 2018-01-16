//https://www.hackerrank.com/challenges/dynamic-array/problem
//180116 재작성 코드
function processData(input) {
    //Enter your code here
    var initial = input.split('\n');
    var info = initial[0].split(' ');
    var lastAnswer = 0;
    var arr;
    var S = new Array();


    for(var i = 0; i < info[0]; i++){
        S[i] = new Array();
    }

    for(var i = 1; i <= info[1]; i++) {
        arr = initial[i].split(' ');
        var temp = (arr[1]^lastAnswer)%info[0];

        switch (arr[0]){
            case '1':
                S[temp].push(arr[2]);
                break;
            case '2':
                var index = parseInt(arr[2]) % S[temp].length;
                lastAnswer = S[temp][index]
                console.log(lastAnswer);
                break;
            default:
                break;
        }
    }
}