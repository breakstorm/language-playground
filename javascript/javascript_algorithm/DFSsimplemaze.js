/*
1 1 1 1 1
0 0 0 0 1
1 1 1 1 1
1 0 1 0 0
1 1 1 1 1
*/

var maze = [
    [1, 1, 1, 1, 1,],
    [0, 0, 0, 0, 1,],
    [1, 1, 1, 1, 1,],
    [1, 0, 1, 0, 0,],
    [1, 1, 1, 1, 1,]
]
var minCount = Number.MAX_SAFE_INTEGER;

function solution(x, y, c){
    console.log("현재", x, " ",y);

    if(x == 4 && y == 4){
        if(minCount > c) minCount = c;
    }

    maze[y][x] = 0;
    if(y-1 > 0 && maze[y-1][x]) solution(x, y-1, c+1);
    if(x+1 < 5 && maze[y][x+1]) solution(x+1, y, c+1);
    if(y+1 < 5 && maze[y+1][x]) solution(x, y+1, c+1);
    if(x-1 > 0 && maze[y][x-1]) solution(x-1, y, c+1);
    maze[y][x] = 1;


}

solution(0,0, 1);
console.log(minCount);

