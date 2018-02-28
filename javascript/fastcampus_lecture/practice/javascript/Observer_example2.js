let newsCenter = {
  userList: [],
  functionList: [],
  actionList: [],
  model: [],
  notify: function() {
    this.userList.forEach(v => { v.target.receive() })
  },
  register: function(user) {
    newsCenter.userList = newsCenter.userList.concat({name: user.name, target: user})
  }
};

let user1 = { 
  name: 'user1',
  receive: function( ) {
    console.log('got a message from newsCenter');
  },
  emit: function() {
    console.log('send a message to newsCenter');
  }
 };
newsCenter.register(user1);
newsCenter.notify();