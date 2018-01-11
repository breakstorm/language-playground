function pascal(input){
    var arr = [];
    for(var i = 0; i < input; i++){
        arr[i] = new Array();
    }

    for(var n = 0; n < input; n++){
        for(var m = 0; m < n+1; m++){
            if(m===0 || m+1 === input){
                arr[n][m] = 1;
            } else{
                arr[n][m] = arr[n-1][m] + arr[n-1][m-1];
            }
        }
    }

    return true;
}

pascal(5);