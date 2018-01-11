/*
분수찾기 풀이
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	5821	3133	2798	55.329%
문제
무한히 큰 배열에 다음과 같이 분수들을 적혀있다.

1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…
이와 같이 나열된 분수들을 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 X(1≤X≤10,000,000)가 주어진다.

출력
첫째 줄에 분수를 출력한다.

예제 입력  복사
14
예제 출력  복사
2/4
힌트
출처
문제를 만든 사람: author6
*/
function fraction(input){
    var arr = [];
    var temp = Math.ceil(input/2);
    for(var i = 0; i < temp ; i++){
        arr[i] = new Array();
    }

    for(var i = 0; i < temp; i++){
        for(var j = 0; j < temp; j++){
            arr[i][j] = (i+1) + '/' + (j+1);
        }
    }
    var i = 0, j = 0;
    var count = 1;
    while(count !== input){
        
        if( i-1 < 0){
            i = j + 1;
            j = 0;
        }else{
            i = i - 1;
            j = j + 1;
        }
        count++
    }
    console.log(arr[i][j]);
    return true;
}
fraction(5); // 2/2
fraction(8); // 3/2