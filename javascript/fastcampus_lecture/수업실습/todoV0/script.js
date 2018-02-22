let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

document.addEventListener('DOMContentLoaded', (e)=>{
  // todos.content 내용을 화면에 rendering
  // INPUT에 엔터 이벤트 할당
  // UL에 클릭 이벤트 할당

  const inputTarget = document.querySelector('#input-todo');
  const ulTarget = document.querySelector('#todo-list');

  modelInitialize()

  inputTarget.addEventListener('keyup', function(v) {
    if(v.keyCode === 13 && v.target.value ) {
      modelInsertList(v.target.value);
      v.target.value = '';
    }
  });

  ulTarget.addEventListener("click", function(v) {
    if(v.target.nodeName === 'LI'){
      // 글자 선택시 동작하던 기존 기능 제외
      // modelDeleteList(v);
    }     

    if(v.target.nodeName === 'INPUT') {
      modelToggleCompletedList(v)
    }

    if(v.target.nodeName === 'BUTTON') {
      modelDeleteList(v);
    }
  });
})

function viewInsertList(item) {
  // li요소 추가

  const ulTarget = document.querySelector('#todo-list');
  const template = '<li><input type="checkbox" value="' + item.content + '"><span>' + item.content + '</span><button>삭제</button></li>';
  ulTarget.insertAdjacentHTML('beforeend', template);
  if(item.completed) modelInitCompletedList(item.completed);
}

function viewAllDeleteList() {
  // 현재 모든 li요소를 삭제
  // debugger;

  let ulTarget = document.querySelector('#todo-list');
  let childCount = ulTarget.childElementCount;
  for(let i = 0; i < childCount; i++){
    ulTarget.removeChild(ulTarget.firstElementChild);
  }
}

function viewRerendering() {
  // todos의 모든 content를 출력하는 함수

  viewAllDeleteList();
  todos.forEach(v => { viewInsertList(v) });
}

function modelInitialize() {
  // 초기화 과정시 사용, todos에 데이터가 있으면 이를 출력

  if(todos.length) todos.forEach(v => { viewInsertList(v); });
}

function modelInitCompletedList(checked) {
  // completed 변수 화면에 출력
  const ulTarget = document.querySelector("#todo-list");
  ulTarget.lastElementChild.firstElementChild.setAttribute("checked", true);
}

function modelInsertList(item){
  // todos에 객체단위로 데이터 입력 
  // template : { id: 3, content: "HTML", completed: false }
  debugger;
  const maxId = todos.map(v => v.id).reduce((prev, curr) => { return Math.max(prev, curr); });
  console.log(maxId)
  const template = {id: (maxId + 1), content: item, completed: false}
  todos = todos.concat([template]);

  // render 호출(전체삭제, 전체호출)
  viewRerendering();
}

function modelDeleteList(event) {
  //todos에서 해당 되는 아이템 이외의 것만 살리기

  const contentText = event.target.previousElementSibling;
  console.log(contentText);
  todos = todos.filter(v => {if (v.content !== contentText.innerText) return v; } );

  // render 호출(전체삭제, 전체호출)
  viewRerendering();
}

function modelToggleCompletedList(event) {
  //todos에서 해당되는 아이템의 completed값 토글

  const contentText = event.target.nextElementSibling;
  todos = todos.map(v => { return (v.content === contentText.innerText) ? Object.assign({}, v, {completed: !(v.completed)}) : v; });

  // render 호출(전체삭제, 전체호출)
  viewRerendering();
}