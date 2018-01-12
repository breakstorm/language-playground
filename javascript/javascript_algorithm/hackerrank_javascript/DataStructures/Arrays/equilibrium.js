// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var P = 0;
    var N = 0;
    var NLeft, NRight;
    var equilibrium = 0;
    var result = [];
    
    for(var i = 0; i < A.length; i++){
        P = A[i];
        
        
        for(var j = 0; j < i; j++){
          NLeft += A[j];   
        }
        
        
        for(var j = i+1; j < A.length; j++){
            NRight += A[j];
        }
        if(NLeft === NRight){
            result.push(i);
        }

        NLeft = 0;
        NRight = 0;
        equilibrium = 0;
    }
    if(result){
        console.log(result);
    }
    else{
        console.log('-1');
    }
}

var test = [-1, 3, -4, 5, 1, -6, 2, 1];
solution(test);