function ToDo() {
  this.ulTarget = document.querySelector('#todo-list');
  this.inputTarget = document.querySelector('#input-todo');
  this.todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }];

  this.renderTodo = function () {
    // UL안의 HTML 초기화, this.todos의 데이터로 랜더링
    if(!(this.todos)) return;

    this.ulTarget.innerHTML = '';
    let html = ''
    this.todos.forEach( v => {
      // debugger;
      const completed = (v.completed) ? 'checked' : '' ;
      const id = v.id;
      html += `<li class="list-group-item">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
          </a>
          <label class="i-checks" for="${id}">
            <input type="checkbox" id="${id}" ${completed}><i></i>
            <span>${v.content}</span>
          </label>
        </div>
      </li>`;
    });

    this.ulTarget.innerHTML = html;
    console.log('[renderTodo] done')
  };

  this.modelAddTodo = function(newContent) {
    // this.todos의 데이터 추가
    const newTodo = { id: this.modelAddIdTodo(), content: newContent, completed: false }
    this.todos = this.todos.concat([newTodo])
    console.log('[modelAddTodo]'+this.todos);
    this.renderTodo();
  };

  this.modelAddIdTodo = function () {
    // this.todos.id의 최대값+1 반환 / todos가 빈 것이라면 1 반환
    return (this.todos.length) ? this.todos.map(v => { return v.id}).reduce( (prev, curr) => { return Math.max(prev, curr); })+1 : 1;
    //return (this.todos.length) ? Math.max.apply(null, this.todos.map(v => v.id)) + 1 : 1;
  };

  this.modelToggleCompletedTodo = function (targetId) {
    // this.todos.completed값 토글 
    this.todos = this.todos.map(v => { return (v.id === +targetId) ? Object.assign({}, v, {completed: !(v.completed)}) : v ;})
    console.log("[modelToggleCompletedTodo]" + this.todos);
    this.renderTodo();
  };

  this.modelDeleteTodo = function (targetId) {
    // this.todos의 한개의 데이터를 삭제
    this.todos = this.todos.filter(v => { if(v.id !== +targetId) return v; });
    // debugger;
    console.log("[modelToggleCompletedTodo]" + this.todos);
    this.renderTodo();
  };

  this.init = function () {
    this.ulTarget.addEventListener('click', (e) => {

      if(e.target.classList[0] === 'glyphicon'){
        let currNode = e.target;
        while (!(currNode.nodeName === "DIV")) currNode = currNode.parentNode;
        this.modelDeleteTodo(currNode.lastElementChild.attributes.for.value);
      }

      if (e.target.nodeName === 'LABEL' || e.target.nodeName === 'I' || e.target.nodeName === 'INPUT') {
        //라벨, 인풋, 아이콘을 누른경우
        let currNode = e.target
        while(!(currNode.nodeName === 'DIV')) currNode = currNode.parentNode;
        this.modelToggleCompletedTodo(currNode.lastElementChild.attributes.for.value);
      }
    });

    this.inputTarget.addEventListener('keyup', (e) => {
      if(e.keyCode === 13 && e.target.value) {
        //엔터를 누르고, 빈칸이 아닌경우
        this.modelAddTodo(e.target.value);
        e.target.value = '';
      }
    });

    this.renderTodo();
  };
}


document.addEventListener('DOMContentLoaded', (e) => {
  let V1 = new ToDo();
  V1.init();
})


// const ToDo = {
//   ulTarget: document.querySelector('#todo-list'),
//   inputTarget: document.querySelector('#input-todo'),
//   todos: [],

//   init: function() {
//     console.log(this);
//     this.ulTarget.addEventListener("click", e => {
//       console.log("ul event");
//     });

//     this.inputTarget.addEventListener("keyup", e => {
//       console.log("keyup event");
//     });
//   }.bind(this)
// }