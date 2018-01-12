/*
트리 데이터구조 : 
 - 노드, 링크 2개
트리 표현방법 :
 - 레프트 차일드, 라이트 시블링
 - 바이너리 트리
순회방법 : 
 - pre-order
 - in-order
 - post-order 
참고사이트1 : http://blog.eairship.kr/215
참고사이트2 : https://www.zerocho.com/category/Algorithm/post/580ed6eb77023c0015ee9686
참고사이트3 : http://www.nextree.co.kr/p4150/
*/

// var Tree = (function(){
//     function Tree(){
//         this.count = 0;
//         this.root;
//     }
//     function Node(data){
//         this.data = data;
//         this.left;
//         this.right;
//     }
    
//     function _insert(root, node){
//         if(!root) return node;
//         if(node.data < root.data) {
//             root.left = _insert(root.left, node);
//             return root;
//         } else{
//             root.right = _insert(root.right, node);
//             return root;
//         }
//     }

//     Tree.prototype.add = function(data){
//         var node = new Node(data);
//         if(this.count == 0){
//             this.root = node;
//         } else{
//             _insert(this.root, node);
//         }
//         return ++this.count;
//     }
// })

// var Tree = (function(){
//     console.log("immediate function start");

//     var Tree = function(){
//         this.count = 0;
//         this.node;
//     }

//     return{
//         Tree: Tree
//     };
// }());


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


var hel = new Tree();
hel.add(6);
hel.add(1);
hel.add(2);
hel.add(65);
hel.add(6333);

// tree.Tree();
console.log(Tree);
console.log(hel)
if( Tree === hel) console.log("wtf");
tree.add(5);