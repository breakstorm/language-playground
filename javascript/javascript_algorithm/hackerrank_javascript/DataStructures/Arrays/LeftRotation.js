function processData(input) {
    //Enter your code here

    var array = input.split('\n');
    var info = array[0];
    array.splice(0,1);
    var infoArray = info.split(' ');
    array = array[0].split(' ');
    var result = "";
    var rotateLength = infoArray[1] % infoArray[0];
    //console.log(rotateLength)
    //console.log(infoArray);
    //console.log(array);
    
    // 방법2, splice concat 이용하기
    var temp = array.splice(0, rotateLength);
    var array = array.concat(temp);
    //console.log(array);

    // 방법1, 실제 1칸씩 옮기는 방법
    // for(var rotate = 0; rotate < rotateLength; rotate++){
    //     var temp = array[0];    
    //     for(var i = 0; i < array.length; i++){
    //         if (i === array.length-1){
    //             array[i] = temp;
    //         } else{
    //             array[i] = array[i+1];
    //         }
    //     }
    // }
    
    for(var i = 0; i < array.length; i++){
        result += array[i] + " ";
    }
    console.log(result)
    
} 

var test = '5 4\n1 2 3 4 5'
processData(test);