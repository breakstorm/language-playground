

var arr = [31, 24, 12, 22, 11];

function Solution(arr) { 
    // i부터 n-1번까지 선택 
    // i부터 0번까지 선택된 카드 비교
    // 기준카드가 더 작다면 swap 실시
    // 기준카드가 더 크다면 stop 

    for(var i = 1; i < arr.length; i++) {
        console.log("start" + arr[i])
        var temp = arr[i]
        var aux = i -1;
        while( (aux >= 0) && (arr[aux] > temp)) {
            arr[aux+1] = arr[aux];
            aux--;
        }
        arr[aux+1] = temp;
    }
}

Solution(arr);
console.log(arr)