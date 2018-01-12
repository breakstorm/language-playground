function insert(head, data, position) {
    var newNode = new Node(data);
    var parentNode;
    var count = 0;
    var list = head;
    
    while(list && (count < position)){
        count++;
        parentNode = list;
        list = list.next;
    }
    
    if(count !== position){
        return head;
    }else{
        if(!parentNode){
            newNode.next = head;
            head = newNode;
        }else{
            newNode.next = list;
            parentNode.next = newNode;
        }
    }
    
    return head;
}