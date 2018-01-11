var edge = [];

//정점 from과 to가 연결되어 있는지 판별하는 함수
//v는 정점의 수

function isConnect(from, to, v) {
    //동적계획 배열
    var dp = new Array();
    var q = new Array();
    q.push(from);
    dp[from] = true;

    while(!q.length) {
        var now = q.pop();
        for(int i = 0; i < edge[now].length; i++) {
            var next = edge[now][i];
            if(dp[next]) continue;
            if(next == to) return true;

            dp[next] = true;
            q.push(next);
        }
    }

    return false;
}