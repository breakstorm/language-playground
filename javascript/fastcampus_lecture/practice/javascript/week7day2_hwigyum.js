
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

var [{id:number1}, ,{id:number2}] = todos;
console.log('hello world')
console.log(number1, number2);

console.log("=============  problem1 =============");
// 강사님 코드
// function getIds() {
//   return todos.map((v, i, a) => { return v.id });
// }
// const teacher = getIds();
// console.log(teacher);


const test1 = todos.map((v, i, a) => { return v.id});
console.log(test1);

console.log("=============  problem2 =============");
// const test2 = test1.reduce((prev,current,i,a) => { return Math.max(prev,current)})

// 강사님 코드
// function getMax() {
//   return Math.max.apply(null, test1);
// }
// console.log(getMax());

const test2 = Math.max(...test1);
console.log(test2);

console.log("=============  problem3 =============");
// todos.push({ id: 4, content: "Test", completed: false });
// todos[0] = { id: 4, content: "Test", completed: false };
// todos.unshift({ id: 4, content: "Test", completed: false });
// todos.splice(0, 0, { id: 4, content: "Test", completed: false } );

// 강사님 코드 
// function addTodo(newTodo) {
//   todos = [newTodo].concat(todos);
// }
// addTodo({ id: 4, content: "Test", completed: false });

todos = [].concat({ id: 4, content: "Test", completed: false }, ...todos);
console.log(todos);

console.log("=============  problem4 =============");
// 강사님 코드 
function removeTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  })
}
removeTodo(4);
// todos.forEach((v, i, a) => { if(v.id === 4) a.splice(i, 1); });
console.log(todos);

console.log("=============  problem5aaa =============");
// todos.forEach((v, i, a) => { if(v.id === 3) a[i].completed = !(a[i].completed); });
// todos = todos.map((v, i, a) => { return (v.id === 3) ? Object.assign({}, v, {completed:true}) : v; });
function toggleTodo(id){
  todos = todos.map((v, i, a) => { return (v.id === id) ? Object.assign({}, v, {completed: !(v.completed) }) : v; });
}
toggleTodo(1);
console.log(todos);

console.log("=============  problem6 =============");
// todos.forEach((v, i, a) => { a[i].completed = true; });

function allTrueTodo(){
   todos = todos.map( (v,i,a) => { return Object.assign( {}, v, { completed:true }); });
}
allTrueTodo();
console.log(todos);

console.log("=============  problem7 =============");
// todos.forEach((v,i,a) => { if(v.completed) a.completedCount++; });
todos.completedCount = 0;

function countTodo(){
  todos.map((v, i, a) => { return Object.assign({}, )})
}
console.log(todos);