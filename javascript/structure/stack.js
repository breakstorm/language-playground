var Stack = (function(){

    function Stack(){
        this.top = null;
        this.count = 0;
    }

    function Node(data){
        this.data = data;
        this.next = null;
    }
    Stack.prototype.push = function(data) {
        var node = new Node(data);
        node.next = this.top;
        this.top = node;
        return ++this.count;
    }
    Stack.prototype.pop = function() {
        if(!this.top) return false;

        var temp = this.top;
        this.top = temp.next;
        --this.count;
        return temp.data;
    }
    Stack.prototype.peek = function() {
        return this.top.data;
    }
    return Stack;
})();
