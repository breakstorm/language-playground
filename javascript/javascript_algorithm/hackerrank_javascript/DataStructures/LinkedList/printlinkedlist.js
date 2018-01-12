function print(head) {
  var temp = head;
  //console.log(temp);
  while(temp != null){
    console.log(temp.data);
    temp = temp.next;
  }
  //console.log(temp);
}