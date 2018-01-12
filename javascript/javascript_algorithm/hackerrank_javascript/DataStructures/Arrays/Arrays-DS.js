function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    //console.log(arr); 
    var temp=""
    for(var i = arr.length-1; i >= 0; i--){
        //console.log(arr[i]);
        temp += arr[i] + " "
    }
    
    console.log(temp)
}

main();