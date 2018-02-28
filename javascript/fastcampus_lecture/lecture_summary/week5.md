# 20180208 정리내용 

# 20180208 수업내용

## 실행컨테스트(execution context)  

- 실행 콘텍스트를 통하여 scope, hoisting, this, function, clousure를 이해한다. 
- ***실행가능한 코드를 형상화하고 구분하는 추상적인 개념***
  1. 코드가 실행되기 전에 환경을 조성한다.     
- 위의 문장을 한개씩
  1. 실행가능한 코드 
     - 전역코드 : 프로그램을 실행할 때(HTML에서 JS가 호출되는 때) 시작되는 영역 
     - Eval코드 :  eval함수를 통하여 실행되는 코드(arguments) 
     - 함수코드 : 함수영역  
  2. 형상화 한다 = 환경을 조성한다 = 객체를 만든다
- 실행컨텍스트 스택 : 실행컨텍스트 들이 저장되는 스택 저장공간 
- 실행컨텍스트 구성
  1. Variable Object 
  2. Scope chain 
  3. This 
- 진행별 작업내용 
  1. 전역코드(함수코드) 진입 
  2. GlobalObject(ActivationObject) 생성 
  3. 전역코드(함수코드) Scope chain 초기화 작업 
  4. 전연코드(함수코드) Variable Object 초기화 작업 
  5. this값 window 입력  

## 클로저  

- 의미 : 내부함수가 참조하는 외부함수의 지역변수가 참조되어 life-cycle이 참조되어 유지되는 현상. 
- 자유변수 : 내부함수가 참조하는 변수  
- Tip. scope는 좁으면 좁을수록 메모리 효율에 좋다. 

# 20180206 수업내용

# 20180206 예습내용

- 화살표 함수 
   - lexical scope를 따른다. 
   - 그래서 execution context를 따르는 문법을 사용하면 원하지 않는 결과값이 나온다. 
- rest 인자 
   - arguments가 아닌 rest로 가변인자를 나타낼수 있다. 
   - arguments에서 Array.apply를 안하여도 된다. 
- symbol 데이터 & 이터레이터 
   - symbol : 유일한 immutable한 자료형 
   - new키워드를 사용하여 만들지 않는다. 
   - 객체의 인자를 가리키는 유일한 값에 사용 
- 제네레이터 & 이터레이터 
   - 제네레이터 : 이터러블(순회가능)한 함수
   - 만드는방법 : function* 와 yield로 구현 
   - 구성내용 : next, done. 이터레이터와 동일 
   - 사용방법 : next를 사용하여 호출 하거나, for of를 사용한다.


# 20180205 수업내용 
- built-in Object 
   - 브라우저에서 기본적으로 제공해 주는 객체. (standard, native 등...)
- String Object 
   - 문자를 표현하는 객체 
   - 메소드의 반환값으로 결과값이 나온다. (call by value)
   - 정규표현식은 별도 공부 필요.
- Date Object  
   - 날짜를 표현하는 객체 
   - 1970/1/1을 시작점으로하며, 계산을 위하여 1일을 86,400,000으로 수치화 한다. 
