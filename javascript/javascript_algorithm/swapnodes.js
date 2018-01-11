//만들어야 하는거
//1. 데이터스트럭쳐
//2. 인서트
//3. 트래버서
//4. 프린트

var Tree = (function(){
    function Tree(){
        this.count = 0;
        this.root;
    }
    function Node(data){
        this.left;
        this.right;
        this.data = data
    }

    function _insertTree(root, node){
        //Given 실행조건
        //1.root의 임시값 만들기
        //2.while(1)
        //When 실행로직
        //1.현재의 root값이 node값 보다 큰가 작은가?
        //2.node가 크면 root의 오른쪽 값이 비어있는지 확인
        //3.node가 작으면 root의 왼쪽 값이 비어있는지 확인
        //2,3.값이 비어있다면 node추가, 값이 비어있지 않다면 root 이동
        //4.node가 추가되면 break;
        //5.값이 같다면 this.count--
        //Then 반환결과
        //1.root노드 반환
        var current = root;

        while(1){
            if(current.data < node.data){
                if(current.right == null){
                    current.right = node;
                    break;
                }else{
                    current = current.right;
                }
            }else if(current.data == node.data){
                tree.count--;
                break;
            }else{
                if(current.left == null){
                    current.left = node;
                    break;
                }else{
                    current = current.left;
                }
            }
        }

        return root;
    }

    function _searchTree(root, data){
        //Gien 수행조건
        //root가 null 일때까지 실행
        //When 수행로직
        //root.data == data
        //Then 수행결과
        if(root == null){
            return false;
        }else{
            if(root.data = data){
                return root;
            }else if(root.data < data){
                return _searchTree(root.right, data);
            }else if(root.data > data){
                return _searchTree(root.left, data);
            }
        }

    }

    Tree.prototype.add = function(data){
        
        //Given 실행조건
        //0.새로운 노드 생성
        //1.루트가 비어있으면 
        //2.루트가 비어있지 않으면 데이터를 추가
        //When 동작내용
        //1.해당 노드가 루트가 됨.
        //2.데이터 추가함수 호출
        //Then 결과값
        //노드의 숫자 반환.

        var node = new Node(data);
        if(this.count == 0){
            this.root = node;
        }else{
            //트리에 데이터 추가 함수 호출, 현재 트리값전달, 새로운 노드 전달
            _insertTree(this.root, node);
        }

        return ++this.count;
    }

    Tree.prototype.get = function(data){
        //Given 수행조건
        //노드의 수가 없는지 확인
        //When 수행로직
        //탐색 함수 실행
        //Then 수행결과
        //결과값 반환

        if(this.count == 0){
            return null;
        }
        var result = _searchTree(this.root, data);
        return result;
    }

    return Tree;
})();


var tree = new Tree();
console.log(Tree)
console.log(tree);
tree.add(8);
tree.add(3);
tree.add(10);
tree.add(1);
tree.add(6);
tree.add(4);
tree.add(7);
tree.add(14);
tree.add(13);
console.log(tree) 
console.log(tree) 

console.log(tree.get(13));