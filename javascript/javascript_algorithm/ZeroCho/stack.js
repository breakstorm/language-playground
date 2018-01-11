var Stack = (function() {
//데이터 개수
//데이터 헤더
//노드 - 데이터, 넥스트
//push기능
//pop기능
//top기능
	function Stack(){
		this.top = null;
		this.count = 0;
	}

	function Node(data){
		this.data = data;
		this.next = null;
	}

	Stack.prototype.push = function(data){
		//입력값 받으면
		//객체의 마지막에 저장하고, count++, head = head.next;

		var node = new Node(data);
		node.next = this.top; //이전 정보
		this.top = node;
		return ++this.count;
	}
	Stack.prototype.pop = function(){
		//입력값 x
		//출력값 top node.data, node.count--;
		//예외

		if(!this.top){
			return false;
		}
		var data = this.top.data;
		this.top = this.top.next;
		this.count--;
		return data;

	}
	Stack.prototype.stackTop = function(){
		//입력값 x
		//출력값 top.node.data

		return this.top.data;

	}

	return Stack;
})();

var stack = new Stack();
console.log(stack.push(1)); // 1
console.log(stack.push(3)); // 2
console.log(stack.push(5)); // 3
console.log(stack.pop()); // 5
console.log(stack.stackTop()); // 3