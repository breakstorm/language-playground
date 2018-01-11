var edge = [
    [1, 2, 3, 4],
    [2],
    [3,4,1,5]
]

function traverseAllGraph() {
    for(var i = 0; i < edge.length; i++) {
        for(var j = 0; j < edge[i].length; j++){
            console.log("edge["+i+"] : "+edge[i][j])
        }
    }
}

function isConnect(from, to, value) {
    var dp = [];
    var q = [];

    q.push(from);
    dp[from] = true;

    while(q.length) {
        var now = q.shift();

        for(var i = 0; i < edge[now].length; i++){
            var next = edge[now][i];
            if(dp[next]) {
                console.log("already check ", edge[now][i])
                continue;
            }
            if(next == to) {
                console.log("connect to " + edge[now][i])
                return true;
            }

            dp[next] = true;
            console.log("trace : " + edge[now][i])
            q.push(next);
        }
    }

    console.log("fail to connect")
}

traverseAllGraph();
isConnect(0, 4);
isConnect(0, 5);