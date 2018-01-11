/*
부녀회장이 될테야
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	128 MB	3177	1840	1651	60.277%
문제
평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

이 아파트에 거주를 하려면 조건이 있는데, “a 층의 b 호에 살려면 자신의 아래(a-1)층에 1호부터 b 호까지 사람들의 수의 합만큼 사람들을 데려와 살아야한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정 했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있나를 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층에 i호에는 i명이 산다.

입력
첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다. (1 <= k <= 14, 1 <= n <= 14)

출력
각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

예제 입력  복사
2
1
3
2
3
예제 출력  복사
6
10
힌트
출처
문제의 오타를 찾은 사람: sunhmj44
어색한 표현을 찾은 사람: veydpz
*/

//시도1. 재귀함수로 문제를 풀이 탑다운
// function countPeople(a, b){
    
//     if(a === 0) return b;

//     if(b === 1) return 1;

//     var result = 0;
//     for(var i = 1; i <= b; i++){
//         result += countPeople(a-1, i)
//     }
    
//     return result;
// }

//시도2. 반복문으로 문제를 풀이 바텀업.
function countPeople(a ,b){
    var arr = [];
    for(var i = 0; i < 15; i++){
        arr[i] = new Array();
    }

    for(var i = 0; i < 15; i++){
        arr[i][0] = 1;
        arr[0][i] = i + 1;
    }

    for(var i = 1; i < 15; i++){
        for(var j = 1; j < 15; j++){
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }

    console.log( arr[a][b-1]);
    return true;
}
countPeople(1,3);
console.log(countPeople(2,10));