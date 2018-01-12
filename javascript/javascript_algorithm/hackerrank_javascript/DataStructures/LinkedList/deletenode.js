function deleteNode(head, position) {
    var count = 0;
    var currentNode = head;
    var parentNode;
    
    while(currentNode && (count < position)){
        parentNode = currentNode;
        currentNode = currentNode.next;
        count++;
    }
    
    if(count !== position){
        head = head.next;
        //return head;
    }else{
        if(!count){
            head = head.next;
            //return head;
        }else if(!parentNode){
            currentNode = currentNode.next;
            //head = currentNode;
        //}else if(!currentNode.next){
          //  parentNode.next = null;
        }else{
            parentNode.next = parentNode.next.next;
            currentNode.next = null;
        }
    }
    
    return head;
}