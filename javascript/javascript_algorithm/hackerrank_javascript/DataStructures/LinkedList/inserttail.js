function insert(head, data) {
    var list;
    var newNode = new Node(data);
    
    if(head === null){
        head = new Node(data)

    }else{
        list = head;
        while(list.next !== null){
            list = list.next;
        }
        list.next = newNode;
    }
    
    
    
    return head;
}