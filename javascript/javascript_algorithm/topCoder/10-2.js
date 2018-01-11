var uni = [
    [1, 2, 3, 4],
    [2],
    [3,4,1,5]
]

function root(value) {
    if(uni[value] < 0) return value;

    return uni[value] = root(uni[value]);
}

function connect(int a, int b){
    a = root(a);
    b = root(b);
    if(a === b) return false;

    if(uni[a] > uni[b]){
        a ^= b;
        b ^= a;
        a ^= b;
    }

    uni[a] = uni[a] + uni[b];
    uni[b] = a;
    return true;
}

function isConnect(from, to) {
    return root(a) === root(b);
}

function size(a) {
    return -uni[root(a)];
}