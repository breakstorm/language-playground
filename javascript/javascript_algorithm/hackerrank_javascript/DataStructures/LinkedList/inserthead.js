function insert(head, data) {
    if(!head){
        var newNode = new Node(data);
    }else{
        var newNode = new Node(data);
        newNode.next = head;    
    }
    
    return newNode;
}
