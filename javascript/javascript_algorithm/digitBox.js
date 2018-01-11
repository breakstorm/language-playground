//const readline = require('readline');
function calcBox(array1, array2){
    var result = 0;

    for(var i = 0; i < array1.length; i++){
        result += parseInt(array1[i]) * parseInt(array2[i]);
    }
    return result;
}


function digitBox(input){
    var inputData = input.split('\n')
    var boxCount = parseInt(inputData.shift());
    var array1 = inputData.shift().split(' ');
    var array2 = inputData.shift().split(' ');
    // console.log(inputData.shift());

    var value = calcBox(array1, array2)

    //배열에서 0의 갯수를 확인 및 제거
    //확인된 숫자만큼 배열을 만들어 낸다. 
    var zero = "0";
    var array1ZeroCount = 0;
    var array2ZeroCount = 0;
    for(var i = 0; i < array1.length; i++){
        if(array1[i] === "0"){
            array1ZeroCount++;
            array1.splice(i, 1)
        }
    }

    for(var i = 0; i < array1.length; i++){
        array1.splice(i, 0, zero);
        for(var j = 0; j < array1.length; j++){
            array1.splice(j, 0, zero);
            console.log(array1);
        }
    }
}

digitBox("7\n-3 -1 -2 0 5 -1 0\n0 -3 2 4 0 5 -2")