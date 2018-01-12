//18. 01. 12 재풀이 
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function calcurate(arr, y, x) {
    var sum = 0;
    
    sum += arr[y][x] + arr[y][x+1] + arr[y][x+2] + arr[y+1][x+1] + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
    
    return sum;
}

function solution(arr) {
    var max = Number.MIN_SAFE_INTEGER;
    var temp;
    for(var i = 0; i < arr.length - 2; i++) {
        for(var j = 0; j < arr[i].length - 2; j++) {
            temp = calcurate(arr, i, j)
            max = Math.max(max, temp)
        }
    }
    
    return max
}

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    console.log(solution(arr));
}

/*  
function main() {


    // var arr = [[1, 1, 1, 0, 0, 0],
    //             [0, 1, 0, 0,   0, 0],
    //             [1, 1, 1, 0,   0, 0],
    //             [0, 9, 2, -4, -4, 0],
    //             [0, 0, 0, -2,  0, 0],
    //             [0, 0, -1, -2, -4, 0]];
    //안되는 케이스1
//     var arr = [[-1, -1, 0, -9, -2, -2],
// [-2, -1, -6, -8, -2, -5],
// [-1, -1, -1, -2, -3, -4],
// [-1, -9, -2, -4, -4, -5],
// [-7, -3, -3, -2, -9, -9],
// [-1, -3, -1, -2, -4, -5]];
    var arr = [[0, -4, -6, 0, -7, -6],
[-1, -2, -6, -8, -3, -1],
[-8, -4, -2, -8, -8, -6],
[-3, -1, -2, -5, -7, -4],
[-3, -5, -3, -6, -6, -6],
[-3, -6, 0, -8, -6, -7]];


    // for(arr_i = 0; arr_i < 6; arr_i++){
    //    arr[arr_i] = readLine().split(' ');
    //    arr[arr_i] = arr[arr_i].map(Number);
    // }
    var sum = 0;
    var max = -200000000;
    //console.log(arr[0].lengthy
    // for(var y = 0; y < arr.length; y++){
    //     for(var x = 0; x < arr[y].length; x++){
    for(var y = 0; y < 4; y++){
        for(var x = 0; x < 4; x++){            
            // if(arr[y][x]){
                sum = 0;
                for(var k = y; k < y+3; k++){
                    for(var j = x; j < x+3; j++){
                        if((j > arr.length-1) || (k > arr.length-1)){
                            console.log("over length", k,j);
                            continue;
                            
                        }
                        if(j===(x) && k===(y+1) ){
                        //    console.log("0,1 : ",arr[k][j]);
                           continue;
                            
                        }
                        if(j===(x+2) && k===(y+1)){
                        //    console.log("2,1 : ",arr[k][j]);
                           continue;
                            
                        }
                        sum += arr[k][j];
                    }
                }
                // console.log("arr"+x+","+y+" : "+sum);
                if(max < sum){
                    max = sum;
                }
                
            // }
        }
    }
    console.log(max);
}

main();*/