var n = 6;
var front = 0, rear = 0;
var map = [], queue = [], visit = [];

for(var i = 0; i < 30; i++){
    map[i] = new Array();
}

var temp = [[1, 2], [1, 3], [2, 4], [2, 5], [3, 4], [3, 6], [4, 5], [4, 6], [5, 6], [-1, -1]];

for(var i = 0; i < temp.length; i++){
    if(temp[i][0] == -1 && temp[i][1]) break;
    map[temp[i][0]][temp[i][1]] = map[temp[i][1]][temp[i][0]] = 1;
}

BFS(1);

function BFS(v){
    //방문표시, 최초queue 입력, 최초 좌표 출력

    visit[v] = 1;
    queue[rear++] = v;
    console.log("현재좌표 : ", v);

    while(front < rear){
        v = queue[front++];

        for(i = 0; i < n; i++){
            if(map[v][i] == 1 && !visit[i]){
                visit[i] = 1;
                console.log(v, "에서", i, "로 이동");
                queue[rear++] = i
            }
        }
    }
}

// 출처: http://blog.eairship.kr/269 [누구나가 다 이해할 수 있는 프로그래밍 첫걸음]