function numtonum(input){
    console.log("입력값 " + input);
    //maxCount, count 정의
    //1번째 숫자보다 작거나 같게 반복 
    //first, second 정의
    //숫자빼기 반복
    //count숫자가 maxCount숫자보다 큰지 확인

    var maxCount = 2;
    var count = 2;
    var first, second, saveIndex;
    for (var i = 0; i <= input; i++){
        first = input;
        second = i;
        while( first-second >= 0){
            var temp =  second;
            second = first - second;
            first = temp;
            count++
        }

        if(maxCount < count){
            maxCount = count;
            saveIndex = i;
        }
        count = 2;
    }


    console.log("최대길이 " + maxCount);
    first = input;
    second = saveIndex;
    console.log(first);
    console.log(second);
    while(first-second >= 0){
        var temp =  second;
        second = first - second;
        first = temp;
        console.log(second);
    }
}

numtonum(10);
numtonum(100);
numtonum(4);