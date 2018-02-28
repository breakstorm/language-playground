// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]



// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3



// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];



// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];



// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];



// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];



// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라

var todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function getIdValue() {
  return todos.map(v => { return v.id})
}
const idArray = getIdValue();
console.log(idArray);

function getMaxIdValue() {
  return todos.map(v => v.id).reduce((prev, curr) => Math.max(prev, curr));
}
console.log(getMaxIdValue())

function setNewTodoList(item) {
  return todos = [item].concat(todos);
}
setNewTodoList({ id: 4, content: 'Test', completed: false })
console.log(todos);

function deleteOneTodoList(item) {
  return todos = todos.filter(v => { if(item !== v.id) return v; });
}
deleteOneTodoList(4);
console.log(todos);

function toggleCompletedTodoList(item) {
  return todos = todos.map(v => { return (item === v.id) ? Object.assign({}, v, {completed: !(v.completed)}) : v;})
}
toggleCompletedTodoList(3);
console.log(todos);

function setAllTrueCompletedTodoList() {
  return todos = todos.map(v => { return Object.assign({}, v, {completed: true}); });
}
setAllTrueCompletedTodoList();
console.log(todos);

function getCountTrueCompletedTodoList() {
  let completedCount = 0;
  todos.forEach((v, i, a) => { if(v.completed) completedCount++; });
  return completedCount;
}
const count = getCountTrueCompletedTodoList();
console.log(count);