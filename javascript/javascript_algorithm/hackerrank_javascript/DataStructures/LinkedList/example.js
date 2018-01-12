// function Node(data){
//     this.data = data;
//     this.next = null;
// }

// function linkedList(node){
//     this.length = 0;
//     this.headNode = new Node(null);
// }

// function linkedListAdd(value){
//     var node = new Node(value);

// }

var linkedList = function() {
    function linkedList(){
        this.list = 0;
        this.head = null;
    }

    function Node(data){
        this.data = data;
        this.next = null;
    }

    linkedList.add = function(value){
        var node = new Node(value);
        var current = this.head;
        if(!current){
            this.head = node;
            this.list = 1;
            return node;
        }else{
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.list += 1;
            return node;
        }
    };

    linkedList.search = function(position){
        var current = this.head;
        var count = 0;

        while(count < position){
            current = current.next;
            count++;
        }

        return current.data;
    }

    linkedList.remove = function(position){
        var current = this.head;
        var before;
        var remove;
        var count = 0;
        
        if(position === 0){
            remove = this.head;
            this.head = this.head.next;
            this.list--;
            return remove;
        } else{
            while(count < position) {
                before = current;
                remove = current.next;
                count++;
            }
            before.next = remove.next;
            this.list--;

            return remove;
        }
    }
    return linkedList;
};


var list = new linkedList();
console.log(list);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.list);
list.search(3);
list.remove(2);
list.remove(1);
console.log(list);