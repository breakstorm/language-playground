function processData(input) {
    //Enter your code here
    //console.log(input);
    var myArr = input.split('\n');
    var length = parseInt(myArr.shift());
    var target = myArr[0].split(' ');
    var start = 1;
    //console.log(length);
    //console.log(target);
    
    for(var i = start; i < length; i++){
        if(parseInt(target[i]) < parseInt(target[i-1])){
            //console.log("start", i);
            var targetValue = target[i];
            for(var j = i; j >= 0; j--){
                if(parseInt(targetValue) < parseInt(target[j-1])){
                    target[j] = target[j-1];
                }else{
                    target[j] = targetValue;
                    j = 0;
                }
                printArray(target);
            }
        }
    }
} 

input = "10\n 2 3 4 5 6 7 8 9 10 1"
// keypoint 문자값을 비교하게 되면 정확한 비교가 되지 않는다.
/* 
2 3 4 5 6 7 8 9 10 10 
2 3 4 5 6 7 8 9 9 10 
2 3 4 5 6 7 8 8 9 10 
2 3 4 5 6 7 7 8 9 10 
2 3 4 5 6 6 7 8 9 10 
2 3 4 5 5 6 7 8 9 10 
2 3 4 4 5 6 7 8 9 10 
2 3 3 4 5 6 7 8 9 10 
2 2 3 4 5 6 7 8 9 10 
1 2 3 4 5 6 7 8 9 10 
*/