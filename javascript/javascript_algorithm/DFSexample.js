

var n; // 정점의 총 갯수
var map = [], visit = []; // 인접 행렬과 방문 여부를 나타내는 배열
for(var i = 0; i < 30; i++){
    map[i] = new Array();
}

function DFS(v)
{
   var i;

   visit[v] = 1; // 정점 v를 방문했다고 표시
   for (i = 1; i <= n; i++)
   {
       // 정점 v와 정점 i가 연결되었고, 정점 i를 방문하지 않았다면
       if (map[v][i] == 1 && !visit[i])
       {
           console.log(v, "에서", i,"로 이동\n");
           // 정점 i에서 다시 DFS를 시작한다
           DFS(i);
       }
   }
}


   var start; // 시작 정점
   var v1, v2;

//    scanf("%d%d", &n, &start);
    n = 8;
    start = 1;
    
    var temp = [[1, 2], [1, 3], [2, 4], [2, 5], [4, 8], [5, 8], [3, 6], [3, 7], [6, 8], [7, 8], [-1, -1]];
    for(var j = 0; j < temp.length; j++){
        if(temp[j][0] == -1 && temp[j][1] == -1) break;
        map[temp[j][0]][temp[j][1]] = map[temp[j][1]][temp[j][0]] = 1;
    }
//    while (1)
//    {
//        scanf("%d%d", &v1, &v2);
//        if (v1 == -1 && v2 == -1) break; // -1과 -1이 입력되면 무한 루프 탈출
//        map[v1][v2] = map[v2][v1] = 1; // 정점 v1과 정점 v2가 연결되었다고 표시
//    }
   DFS(start); // DFS 시작!



//출처: http://blog.eairship.kr/268 [누구나가 다 이해할 수 있는 프로그래밍 첫걸음]