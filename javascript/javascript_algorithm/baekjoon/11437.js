/*

LCA 풀이
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	256 MB	1400	665	439	46.211%
문제
N(2 ≤ N ≤ 50,000)개의 정점으로 이루어진 트리가 주어진다. 트리의 각 정점은 1번부터 N번까지 번호가 매겨져 있으며, 루트는 1번이다.

두 노드의 쌍 M(1 ≤ M ≤ 10,000)개가 주어졌을 때, 두 노드의 가장 가까운 공통 조상이 몇 번인지 출력한다.

입력
첫째 줄에 노드의 개수 N이 주어지고, 다음 N-1개 줄에는 트리 상에서 연결된 두 정점이 주어진다. 그 다음 줄에는 가장 가까운 공통 조상을 알고싶은 쌍의 개수 M이 주어지고, 다음 M개 줄에는 정점 쌍이 주어진다.

출력
M개의 줄에 차례대로 입력받은 두 정점의 가장 가까운 공통 조상을 출력한다.

예제 입력  복사
15
1 2
1 3
2 4
3 7
6 2
3 8
4 9
2 5
5 11
7 13
10 4
11 15
12 5
14 7
6
6 11
10 9
2 6
7 6
8 13
8 15
예제 출력  복사
2
4
2
1
3
1
힌트
출처
문제를 만든 사람: baekjoon

 
*/

var Tree = (function() {
  function Tree() {
    this.count = 0;
    this.root;
  }
  function Node(data) {
    this.data = data;
    this.left;
    this.right;
  }
  function _insert(root, node) {
    if (!root) return node;
    if (node.data < root.data) {
      root.left = _insert(root.left, node);
      return root;
    } else {
      root.right = _insert(root.right, node);
      return root;
    }
    return root;
  }
  Tree.prototype.add = function(data) {
    var node = new Node(data);
    if (this.count == 0) {
      this.root = node;
    } else {
      _insert(this.root, node);
    }
    return ++this.count;
  };
  function _get(data, node) {
    if (node) {
      if (data < node.data) {
        return _get(data, node.left);
      } else if (data > node.data) {
        return _get(data, node.right);
      } else {
        return node;
      }
    } else {
      return null;
    }
  }
  Tree.prototype.get = function(data) {
    if (this.root) {
      return _get(data, this.root);
    } else {
      return null;
    }
  };
  function _remove(root, data) {
    var newRoot, exchange, temp;
    if (!root) return false;
    if (data < root.data) {
      root.left = _remove(root.left, data);
    } else if (data > root.data) {
      root.right = _remove(root.right, data);
    } else {
      if (!root.left) {
        newRoot = root.right;
        // root 메모리 정리
        return newRoot;
      } else if (!root.right) {
        newRoot = root.left;
        // root 메모리 정리
        return newRoot;
      } else {
        exchange = root.left;
        while (exchange.right) exchange = exchange.right;
        temp = root.data;
        root.data = exchange.data;
        exchange.data = temp;
        root.left = _remove(root.left, exchange.data);
      }
    }
    return root;
  }
  Tree.prototype.remove = function(key) {
    var node = _remove(this.root, key);
    if (node) {
      this.root = node;
      this.count--;
      if (this.count == 0) this.root = null;
    }
    return true;
  };
  return Tree;
})();

var tree = new Tree();
tree.add(5); // 1
tree.add(3); // 2
tree.add(4); // 3
tree.add(2); // 4
tree.add(7); // 5
tree.add(6); // 6
tree.root.left.data; // 3
tree.root.left.left.data; // 2;
tree.root.left.right.data; // 4
tree;
tree.remove(3);
tree.root.left.data;