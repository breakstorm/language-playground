# week4 정리내용 
전체개요 
   1. C-type 언어  
   2. 자바스크립트 상속 (prototype) 
   3. 자바스크립트 프로그램 실행 (execution context) 

간단요약 
   1. C-type언어 
      - 구성항목 
         1. 식(expression) : 1개의 결과값 도출 
         2. 문(statement) : ; {} 으로 표현된 명령어의 집합 
         3. 값(value) : 6개의 원시값, 1개의 객체로 구성. 
      - 흐름제어 : 조건문, 반복문, 함수 
      - 값 저장 방식
         1. 원시값(primitive type) : immutable, pass-to-value
         2. 객체값(object type): mutable, pass-to-reference 
   2. 자바스크립트 상속(공유) 
      - Object 구성 : 프로퍼티로 구성 (variable, function 저장)
      - 객체지향이란 : 추상화를 통하여 프로그래밍화 하는것을 의미 
         1. 상속 
         2. 다형성(오버라이딩, 오버로딩) 
         3. 캡슐화  
      - 상속구현 방법 
         1. 일반함수 생성시 객체도 같이 생성 (prototype Object) 
         2. 일반함수에서 객체로 연결되는 변수 존재 (prototype property) 
         3. 객체에서 일반함수로 연결되는 변수 존재 (constructor property) 
         4. 객체 생성시 함수에서 prototype Ojbect의 주소값 전달, __proto__에 해당값 저장 
         5. 프로퍼티 조회시 자신의 객체에 없으면 __proto__를 이용하여 올라가면서 찾음 (prototype chain) 
   3. 자바스크립트 프로그램실행(execution context) 
      - 실행의 종류 
         1. 전역코드(global code) 
         2. 함수코드(function code) 
         3. 실행코드(eval code) 
      - 코드 실행전 초기화 작업 진행 내용 
         1. variable object 
         2. scope object 
         3. this 
      - this의 특이경우 
         1. 초기화 단계에서의 this값 결정은 의미가 없음 : lexical scope 
         2. 실행 단계에서 this값 결정 : 이해를 돕기위한 reference type 
      - this값 조작을 위한 방법 
         1. apply, call을 통한 this값 조작후 바로 실행 
         2. bind를 통한 강력한 바인딩 함수 반환 
         3. ES6의 화살표 함수로 문법 작성

# 20180202 수업내용 
1. 함수
   - __proto__ : 프로토타입 객체를 공유하기 위해서 있는 존재. 부모역할을 하는 객체를 찾아갈수 있는 값.
   - 즉시실행함수(IIFE) : 프로그램 실행시 1번 호출되는 표현 
2. 프로토타입과 객체지향 
   - 모든 객체는 생성자 함수가 만든다. 그리고 __proto__라는 부모역할을 하는 객체를 가르키는 값을 가진다.
   - 함수(혹은 함수객체)는 생서시 PrototypeObject가 같이 자동으로 만들어 진다. 
   - 관점 기준에서 __proto__와 prototype 프로퍼티 
      1. 모두 PrototypeObject를 가리킨다. 
      2. __proto__는 자식기준에서 부모역할을 할 객체를 가리킨다. 
      3. prototype프로퍼티 생성자 함수 기준에서 객체의 부모역할을 해줄 객체를 가리킨다. 
   - prototype chain : __proto__를 이용하여 연관된 모든 객체에 요소가 있는지 확인하는 행동. 
   - 객체리터럴
      1. 객체 리터럴( var = { } ) 방식도 결국 'Object'생성자 함수를 이용하는 것이다. Object생성자 함수도 위의설명이 적용되어, 'Object' PrototypeObject가 존재한다.
      2. 객체리터럴은 상속을 만들기 어렵다. 
   - 기본자료형 
      1. 기본 자료형(primitive type)도 객체이다. 근거1.자료형이 메소드를 사용할 수 있다. 근거2. 기본자료형을 만드는 생성자 함수가 있다. 
      2. **기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 된다.**
      3. 대신 기본자료형에 프로퍼티를 추가할 수는 없다. 
      4. 기본 자료형의 PrototypeObject에 property를 추가할 수 있다. 
3. scope 
   - 어떻게 scope을 구분할 것인가, scope간 상호작용에 대한 내용. 
   - 종류 
      1. global scope : 프로그램 시작시의 scope, 어디서든 참조 할 수 있다. 
      2. local scope or function-level scope : 함수별로 scope을 구별. 함수안에서만 함수내의 것을 사용할 수 있다. 
   - scope이 중요한 이유 
      1. 함수안의 요소(변수, 파라메터, 함수)가 유효한 기간은 함수가 실행될 때 까지이다.
   - scope사용 케이스 (global은 모두 접근이 가능하기 때문에 제외)
      1. 이웃한 함수간 접근 : 서로 접근을 할 수 없다.
      2. 부모자식간 접근 (함수안의 함수) : 자식은 부모~전역범위까지 모두 접근 가능하다. 부모는 접근이 불가능 하다. 
   - lexical scoping : scope은 선언당시에 정해진다. 하지만 이는 문제를 포함하고 있으며 이에 대한 더욱 세부적인 내용은 closure에서 이어진다. 
4. 웹사이트 'Tools - eslint' 진행
5. this
   - tihs는 기본적으로 전역객체 (콜백함수에서도 this는 기본적으로 전역객체. 콜백함수는 뒤에 나옴.)
   - 예외경우 메소드 내에서 this 사용할때 = 해당 객체 
```js
var obj = {
   name: 'lee',
   hello: function() { console.log(this.name) }
}
obj.hello();
```
   - 예외경우 생성자 함수에서 할때 = 생성하는 객체 
```js
var obj = new Function();
```
   - ES6 문법으로는 근본 해결책이 제시됨.  

   - 내부함수에서 몇몇 가지 상황과 해결방법 
   (앞으로 callback 함수를 사용하는 경우가 많다. 이경우 this는 전역객체(window) 인데 이것을 원하는 것으로 바꾸고 싶다.)
      1. this를 변수에 저장해서 사용한다.
      2. call, apply 함수를 사용해서 원하는 값으로 this를 바꾼다.  

   - new키워드를 만나면 동작하는 내용 
      1. (이름없는)빈객체를 만들어 준다. 
      2. this를 만들었는 빈객체로 바꾸어 준다. 
      3. 생성자 함수 내용을 수행하고 (이름없는)빈객체를 반환 한다.

# 20180202 생각정리 
- constructor function 이 호출되는 과정 : 위에서 정리.
- bind이라는 의미.  
- callback을 호출시점을 제어하는 방법 
- wrapper object : 원시타입(primitive type) 자료를 생성하고 메소드를 사용하는데 도움을 주는 객체 


# 20180201 수업내용 
- 조건문 (evaluating) : true/false에 따라 다른 내용을 수행 
- 강제형변환(type coercion) 1 + '2'
- data type conversion : one -> another (number->string)
- 객체 
   - 구성 : property, method 
   - 생성방법 : 리터럴, Object, 객체함수(생성자함수)
   - 사용방법 
      - . \[\] 의 문자를 사용해서 property, method에 접근(사용)을 한다. 
      - 구성요소 변경, 추가, 삭제 가능
   - 분류 
      - built-in Object 
         - Standard Built-in Object 
         - Native Object 
            - BOM(Browser Object Model) 
            - DOM(Document Object Model) 
      -Host Object : 사용자 정의 객체 
- 함수를 왜 객체로 만들었을까? 상속을 해주기 위해서?!
- 함수 
   - 함수는 일급객체 (first-class citizen) 
      - 무명 리터럴 으로 사용 가능하다. 
      - 변수, 자료구조에 저장 가능하다. 
      - 파라미터로 전달 가능하다. 
      - 값으로 사용 할 수 있다. 
   - 함수의 종류 
      - 함수선언식 
      - 기명함수 표현식
      - 익명함수 표현식 
      - 즉시실행 함수 
      - Function 생성자 함수  
   - 호이스팅 
      - 함수호이스팅 : 선언, 초기화, 할당(호출가능) 
      - 변수호이스팅 : 선언, 초기화(함수표현식은 변수 호이스팅에 해당)
   - 매개변수
      - 값 혹은 객체 전달 
      - parameter 값을 arguments로 접근할 수 있다.
   - 반환값 : default undefine  
   - 함수객체 구성 
      - arguments 
      - length 
      - caller 
      - name 
      - __proto__ 


# 20180201 문제 
- this의 의미 (전일 했는 내용과 비교 필요) 
   - 전역에서 사용시
   - 함수 안에서 사용시 
      - 
- 앞에 객체를 적었는데도 this가 원하는 곳을 안가키는 경우 
https://blog.weirdx.io/post/3214 
https://github.com/FEDevelopers/tech.description/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-this%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A4%EB%AA%85-2#6-%EB%B0%94%EC%9D%B8%EB%94%A9-%ED%95%A8%EC%88%98
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype = {
  move: function(x, y) {
    this.x += x;
    this.y += y;
   console.log(this);

    function checkBounds() {
      if (this.x > 100) {
        console.error('Warning: Shape out of bounds');
      }
    }

   checkBounds.call(this);
  }
};

var shape = new Shape();
shape.move(101, 1);
```

- bind : Function.prototype.bind 는 원하는 Function에 인자로 넘긴 this 가 바인딩 된 새로운 함수를 리턴한다.
```js
Shape.prototype = {
  move: function(x, y) {
    this.x += x;
    this.y += y;

    function checkBounds(min, max) {
      if (this.x < min || this.x > max) {
        console.error('Warning: Shape out of bounds');
      }
    }

    var checkBoundsThis = checkBounds.bind(this);
    checkBoundsThis(0, 100);
  }
};
```
```js
Shape.prototype = {
  move: function(x, y) {
    this.x += x;
    this.y += y;

    var checkBounds = function(min, max) {
      if (this.x < min || this.x > max) {
        console.error('Warning: Shape out of bounds');
      }
    }.bind(this);

    checkBounds(0, 100);
  }
};
```

```js 
function LateBloomer() {
  this.petalCount = Math.ceil( Math.random() * 12 ) + 1;
}

// declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout( this.declare, 1000 );
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
};
var lb = new LateBloomer();
lb.bloom();

// "I am a beautiful flower with undefined petals!"
```


# 20180131 예습 
- 객체 : primitive type이 아닌 나머지는 모두 객체 (함수, 배열 ...) 
- syntatic sugar : 새로운 내용이 아닌 기존 내용을 쉽게 사용할 수 있게끔 만든 문법. 
- 객체 리터럴 : 중괄호와 변수선언(var)을 이용하여 사용한다.  
- 객체 함수 : 생성자와 new 이용하여 사용한다. 
- 일급객체 
   - 무명의 리터럴로 표현이 가능하다. 
   - 변수나 배열 등 자료형에 저장할 수 있다. 
   - 함수의 파라미터로 전달 할 수 있다. 
   - 반환값으로 사용할 수 있다. (pass to value)
- 함수 선언식 : function foo () {}
- 기명 함수 표현식 : var foo = function bar() {};
- 익명 함수 표현식 : var foo = function () {};
- 호이스팅 
- VO(variable object) 
- 함수호이스팅 : 선언, 초기화, 할당이 이루어짐 
- 변수호이스팅 : 선언, 초기화 이루어짐 (함수표현식은 변수 호이스팅 발생)  
- 비순수함수 : parameter에 side-effect 발생하는 함수 
- 순수함수 : parameter에 side-effect 발생하지 않는 함수  
- 반환값 : 배열, 객체을 이용하여 여러개의 값을 반환할 수 있다. 
- console.dir : 객체 요소(property)를 나타내는 명령어 
- arguments : a(arguments) 
- parameter : function a(parameter) { } / 유사배열 객체
- 유사배열객체 : length property를 가진 객체 
- __proto__ : [[Prototype]] 이라고도 한다. 자신의 상위 객체를 가지며, prototype chain 특성이 있다. 
- 즉시호출함수표현식(IIFE) : 호출과 동시에 실행을 하는 함수.
- 내부함수 : 함수 내부에 정의된 함수 
- 콜백함수 : 비동기 처리, 클로저(???) 이다.  
- 프로토타입 객체 : 상속시 자신의 객체 내용을 사용할 수 있게 해주는 객체.  
- 모든 객체는 __proto__를 가진다.  
- prototype chain : 개체가 자신에게 없을 경우 __proto__의 객체로 가서 찾는 행위 
- 함수 리터럴 방식 ? 
- 패턴별 this의 값 
   - 함수 : 호출하는 식이 앞에 가리키는 객체 
```js
foo() // this = window
obj.foo() // this = obj 
```
   - 인자 : 호출하는 식 앞에 가리키는 객체
```js
var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1
    }
   console.dir(this);
    bar.apply(this);
  }
};

obj.foo();
```
```js
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 1초 지체 후 bloom 선언
LateBloomer.prototype.bloom = function() {
   debugger;
   console.log(this);
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();
// 1초 뒤, 'declare' 메소드 유발
```

   - 메소드 : ?????? 
   - 생성자 : 앞에 있는 신규 객체를 가리킴 
```
var foo = new bar() ==> this = foo
```
- scope-safe-pattern : 객체 생성시 에러릴 피하기 위한 패턴 
   - 생성자 함수는 첫글자를 대문자로 시작한다.
- function scope
- lexical scoping 
- 암묵적 전역 (implied global) 
- scope-chain
- 실행컨텍스트(execution context, EC) : 프로그램이 현재 호출된 정보, call stack에서 최상위를 가르키는 말, 실행컨텍스트 객체(함수실행전 생성) + 실행 객체
- 실행컨텍스트 스택
- 실행가능 코드 : 실행할 수 있는 코드의 환경
   - 전역코드 : 전역 영역에 있는 코드 
   - 함수코드 : 함수 내에 있는 코드 
- 실행컨텍스트 객체 
   - scopechain 
   - variable object 
   - this
```
1. Find some code to invoke a function.
2. Before executing the function code, create the  execution context.
3. Enter the creation stage:
   - Initialize the Scope Chain.
   - Create the variable object:
      - Create the arguments object, check the context for parameters, initialize the name and value and create a reference copy.
      - Scan the context for function declarations:
         - For each function found, create a property in the  variable object that is the exact function name, which has a reference pointer to the function in memory.
         - If the function name exists already, the reference pointer value will be overwritten.
      - Scan the context for variable declarations:
         - For each variable declaration found, create a property in the variable object that is the variable name, and initialize the value as undefined.
         - If the variable name already exists in the  variable object, do nothing and continue scanning.
      - Determine the value of "this" inside the context.
4. Activation / Code Execution Stage:
   - Run / interpret the function code in the context and assign variable values as the code is executed line by line.
```
- creation stage 
- execution stage  
- 

# 20180131 반응형웹 레이아웃 연습 
- HTML 마크업 구조 작성 
- 습작 사이트 CSS 분석 
- 

# 20180130 기본 아닌 기본 내용 
- 식 문 값 연산자 예약어 주석 
   - express : 명령을 수행하여 한개의 값을 도출 
   - value : javascript의 datatype으로 나타낸 것 
   - statement : ; {}을 이용하여 만든 명령의 집합 
   - operator : 지정된 특수한 명령을 수행하는 기호  
   - keyword : 지정된 특수한 명령을 수행하는 단어의 조합 
   - comment : 프로그램에 영향을 미치지 않는 글 
- 변수와 변수
   - 메모리구조 : 1word = 4byte = 32bit = 1번에 읽을수 있는 주소범위(32bit cpu 기준)  
   - 변수의 종류 : primitive type / object type  
      - primitive type : immutable 하고 call by value(pass to value) 하다 
         - 변수의 값을 다시 할당할때 기존의 메모리 주소값을 사용하지 않고, 다른 곳에 할당을 한다. 이를 immutable하다고 한다. 
      - object type : mutable 하고 call by reference(pass to reference) 하다
- 오퍼레이터 
   - 단축평가 : 논리연산자가 boolean과 사용되지 않아 결과값이 피연산자 값중 하나를 반환하는 것을 이용하여 작성 
      - && : 마지막에 나오는 truthy 연산자 반환 
      - || : 처음 나오는 truthy 연산자 반환
- 제어문(반복, 조건, 형변환)

# 20180130 예습내용 
- new 명령어를 통하여 객체 생성이 가능하다. 
- 모든 객체는 \[\[prototype\]\] 이라는 은닉속성을 가지고 있고, 이는 다른 protype을 가리킨다.  
- 결국 선행해서 알아야 하는 내용은 객체(클래스) 선언 내용이다.
   - prototype에서 상속이 class와의 연관관계를 모르겠다.
   - this의 위치별 의미 
   - bind, apply, call의 차이점 및 활용방법

# 20180129 자바스크립트 시작 
## 수업내용
- 프로그래밍 = 컴퓨터 언어 = 컴퓨터 + 언어(의사전달을 효율적으로 하는 수단) 
- 웹의 동작 = 클라이언트에서 요청(request)을 하고, 서버에서 응답(response)를 보내는 방식 
- 브라우저 동작 = 웹엔진(HTML파서, CSS파서) + 자바스크립트엔진(JS파서)

## 선배와의 만남
- 프론트엔드 개발 공부 어떻게 했나 
   - (이론 학습 + 체득) 반복
- 팀 프로젝트 (DADA) 를 통해 얻게된 부분
- 구직 활동
   - 자신이 PR을 할 방향성을 잡아야 한다.  
   - 잘 만든 문서화 내용은 구직과 연결된다. 
- 리액트 네이티브로 진행한 개인 프로젝트
- 내가 수강생일 때 알았다면 좋았을 것들  
   - 알고리즘, 프로그래밍 기초. 왜냐하면 이슈가 발생을 하였을때 기초가 없으면 해결을 할 수 없다고 요즘 느끼고 있다. 
- 팀프로젝트 
   - 팀원 들의 정확한 역할 분배 
   - 기획 단계에서 많은 시간을 절약하고 개발 시간을 확보 
   - 코드인벤션, github, 프로젝트 tool(invision, zeplin), 웹폰트 등을 사용해도 좋지만 바쁘다면 패스.
- 내가 알고 싶은것 
   - 각 단계별 취업이 된 이유를 꼽으면, (서류통과, 면접) 
     답변 : 디자인을 할 수 있다는 점과 당시 회사에서 디자인이 필요한 사람이 필요하다는 것이 맞았다. 하지만 정확한 이유는 자신도 알 수 없다. 
   - 프로젝트 선정 기준은 무엇인가? (트렌디한 기술 or 하고싶은 기술) 
     답변 : 2가지 이유보다 자신이 왜 이기술을 선정했는 지에 대해서 이야기를 할 수 있어야 한다. 

# 20180127 사전학습 

## 프로그래밍언어 
> 사람의 언어를 컴퓨터가 이해할 수 있는 언어로 이야기 하는 것. 
- [프로그래밍언어-구성요소](http://www.bsidesoft.com/?p=760)

## 컴퓨터적 사고방식 
> 논리적, 수학적  

## 자바스크립트 
현재 ES6가 공개되었고, 간단히 추가된 부분을 나열 하면 'let/const keyword, module system, Arrow Function, class' 이다. 

## 브라우저 동작원리 
- DOM랜더링(파일다운로드 + 실행) + 스크립트랜더링(파일다운로드 + 실행)  
- 스크립트 랜더링 효율화 방법 
   1. HTML파일 하단부에서 script호출을 한다. 
   2. script async DOM,과 스크립트 다운로드 동시 진행. 다운로드 완료직후 스크립트 실행. 
   3. script defer DOM,과 스크립트 다운로드 동시 진행. DOM랜더링 완료후 스크립트 실행.  

## 모르던 내용 
   1. !! : 피연산자를 불린값으로 변환한다. undefine 값이 아니면 모두 true 이다.  

## 프로토토입 객체 
   0. 기존 알고 있던 내용 : 프로토타입을 공유하여 개별 객체 선언시 사용되는 메모리 공간을 절약 한다. 
   1. prototype chain 찾을려고 하는 프로퍼티에 대해 자신의 객체부터 부모까지 찾아가는 행위. 
   2. 프로퍼티 추가 삭제 가능 
   3. 프로퍼티에 함수 뿐만이 아니라, 값도 가능.

## ES6 변수관련  
- 기본구문(변수, 반복, 제어) -> 함수 -> 범위 -> this -> 객체 -> 비동기 
   1. scope(유효범위) 
      - 기존 function-level scope : 함수 내에서 모든 변수를 사용 가능 하다. 
         - 문제점 : 함수 안의 함수, scope-chain으로 다른 함수의 변수를 참조할 수 있게 된다.  
         - 초기화, 할당, 선언
      - scope-chain : [식별자를 찾기 위해서 local에서 global로 단계별 찾아나간다.](https://stackoverflow.com/questions/1484143/scope-chain-in-javascript) 
      - [자유변수](https://en.wikipedia.org/wiki/Free_variables_and_bound_variables) 와 [클로져](https://en.wikipedia.org/wiki/Closure_(computer_programming)) : local변수 이외는 모두 자유변수라고 칭한다. 그중 scope-chain 일어나면서 자신이 참조(사용)할 수 있는 변수를 클로져 라고 한다. 
      - 쉐도잉 : 같은 변수명을 사용 하는 것이 가능 해서 상위 변수를 사용하지 못하는 것을 의미 한다. 
      - [호이스팅](http://poiemaweb.com/js-data-type-variable#24-%EB%B3%80%EC%88%98-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85variable-hoisting) : 변수와 함수 선언문을 scope의 선두로 옮겨지는 작업.  
   2. let&const 공통점 
      - block-scope를 가진다. 
      - 호이스팅이 발생하지 않는다. 
      - 전역에 선언을 하여도 window.변수명 으로 접근할 수 없다. 
   3. let
      - var처럼 변수에 값을 재할당 할 수 있다. 
   4. const 
      - 상수값만을 가진다. (재할당 불가능)  

## ES6 1. 
   1. 백틱(backtick)  
      - 홑 따옴표와, 쌍 따옴표를 모두 사용할 수 있다. 
   2. 대입문(template substitution) 
      - `${변수명}` 의 형태로 template을 사용할 수 있다. 
   3. 화살함수(ArrowFunction)  
      - `() => {}` 의 형태  
      - (항상 익명이다.)[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98] 그래서 생성자로 사용할 수 없다.  
      - lexical this 발생. this를 상속(계승) 받는다. 
      - 사용하지 말아야할 경우 
         1. 객체 메소드 
         2. 객체 prototype 
         3. 생성자 함수 
         4. addEventListener 함수  
   4. 값 
      - 6종류의 primitive type, others call by reference type
   5. 함수인자 초기값 설정 (default parameter value) 
      - 타입선언 없이 사용
   6. rest 파라메터 
      - 스프레드 오퍼레이터를 이용하여 작성한 변수 
   7. 스프레드 오퍼레터   
   8. 프로퍼티 축약표현 
      - 메소드 프로퍼티 축약
   9. 디스트럭쳐링  
      - 배열 디스트럭쳐링 
      - 객체 디스트럭쳐링  
   10. 모듈화(module) - export&import 
   11. 비동기처리(promise) 
   12. 이터레이션 프로토콜  : iterator = iterable[Symbol.iterator](); 
   13. for of 루프 
   14. symbol 자료형 (7번째 자료형) 
   15. 데코레이터 
   16. 제네레이터 : iterable을 generate하는 function
   17. 

## ES6 2. 실행 컨텍스트 관련
   1. this를 원하는 실행위치에 실행시키기 위한 방법 
      - this = that 
      - bind, call, apply 사용  

## ES6 3. 오브젝트 상속과 class
   - 변수에 객체를 바로 생성 가능 var test = {}; 
   - 동일한 기능의 객체를 동적으로 사용하기 위해 함수를 만들어 new를 선언
      function test() { this.a = 'a' }
      var aDash = new test(); 
      - new키워드도 prototype을 이용하는 방법  
   - new 키워드 없이 객체를 만드는 방법이 객체를 선언하는 방법 필요성 대두. Object 객체 
      - Object.create() 
      - Object.assign() 
      - Object.setProperty() ... 
      - Object.freeze() // immutable variable 변경 / deepFreeze 가능
      - Object.seal() //변경가능, 추가 및 삭제 불가능
   - class로 객체 만들기 
```javascript
class Polygon {
   constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
class Square extends Polygon {
   constructor(sideLength) {
      super(sideLength, sideLength)
    }
   get area() {
      return this.height * this.width;
    }
   set sideLength(newLength){
      this.height = newLength;
      this.width = newLength;
    }
}

var square = new Square(2);

square.area
4
square.sideLength = 5
5
square.area
25
```
   - prototype link + prototype object 
      1. [참고링크1](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67) 
      2. [참고링크2](http://rhio.tistory.com/236) 
      3. [참고링크3](http://insanehong.kr/post/javascript-prototype/)


1. [this 관련 링크-hun's 블로그](http://huns.me/development/258) 

object.assign 
object.createElement 
object.create