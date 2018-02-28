# 20180221

## 자습내용

### 옵저버패턴 



# 20180220 

## 수업내용 

## 자습내용 

[요비 블로그 - callback](http://yubylab.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

[javscript is sexy](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/#)

# 20180219 

## 자습내용 

1. Promise 

   - 객체를 만들어서 메소드를 호출하여 사용한다. 
   - resolve메소드는 정상적인 경우의 리턴값으로, reject는 비정상적인 경우의 반환값으로 사용한다. 
   - .then을 사용하면 앞의 함수에 이어서 사용을 한다. then안에는 promise객체를 적고 return 혹은 throw를 사용하여 반환한다.  
   - then안에 promise함수는 익명 호출이여도 괜찮다. 무조건 함수를 호출하고 그 함수는 return, throw를 반환하여야 한다.
   - then/catch는 같이 사용을 하여 준다. 

   [참고자료](http://yubylab.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Promise-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

## 수업내용

 1.  DOM 개론

     - 바닐라 코드로 작성시 ***크로스브라우징***  ***이벤트 연계처리(토글, 추가)*** 어려움 
     - jQuery 작성시 ***DOM에 종속*** ***라이브러리가 무거움*** 
     - 모던 자바스크립트(프레임워크) 애플리케이션 에서는 이러한 문제를 해결하기 위해서 나옴.  
     - Document(HTML파일) Object(브라우저가 이해할 수 있는 자료) Model(데이터 형식) 이라는 의미 
     - 이것을 제대로 이해하기 위해서는 브라우저의 동작원리에 대해서도 알고 있어야지 에러처리가 가능하다. 
     - Object로 HTML을 만드는 이유는 JavaScript가 ***접근***을 해서 ***조작***을 하기 위함이다. 

	2. DOM 구조 

    ![](http://poiemaweb.com/img/HTMLElement.png)

    - Element - Text 관계 : 부모 - 자식 
    - Element - Attribute 관계 : 형제관계 
    - Element - Element 관계 : 구조에 따라, 부모-자식, 형제관계 
    - Query(선택)과 Traverse(탐색)을 통하여 DOM조작 
    - 다수의 Node 선택시 방법에 따라 ***HTML Collection(live)*** ***Nodelist(non-live)*** 값으로 나뉜다.  
    
    3. DOM조작 
    
    - Node를 만들고, 추가하는 모든 작업 수행하는 방법 
    - innerHTML을 사용하는 방법 (보안이슈 존재) 
    - AdjacentHTML을 사용하는 방법(보안이슈 존재) 



1. 비동기 
   - 브라우저는 single thread, event driven 방식으로 동작. 
   - 사용자에게 유려한 경험을 제공하기 위하여 비동기처리 제공. 
   - 비동기식이란 해당작업을 다른이에게 맡기고 나머지 작업을 수행하는 것을 의미한다. (Webapi, 서버 에게 작업 부여) 
2. 콜백함수 
   - eventQueue에 함수를 넣었다 callStack에 실행. 
   - eventQueue는 callStack이 비면은 이동을 하여 작업을 실행한다. 
   - eventQueue는 비동기 함수를 저장하는 곳, callStack은 프로그램에서 호출된 코드를 저장하는 곳. 
   - 이는 이벤트 처리를 하기 위해서 주로 사용이 된다. (물론 다른곳에서도 사용이 가능하다.) 
3. 이벤트 
   - Binding은 이벤트가 호출 되었을때 수행하는 함수를 연결(호출). 
   - BInding 방법은 ***HTML에 작성*** 하거나 ***프로퍼티로 작성*** 하거나 ***addEventListener와 같이 부여***하는 방식이 있다. 요즘은 addEventListener가 많이 사용 된다. 
4. Binding과 this
   - addEventListener에서 binding된 함수는 this인자를 호출하는 객체값으로 가진다. 
   - addEventListener에서 binding된 함수는 event라는 파라메터를 가진다. 
   - Event.target은 이벤트를 발생시킨 DOM을 가리킨다. 
   - Event.currentTarget은 this와 값이 동일하다. 
5. Flow & Delegation
   - Flow : 이벤트가 발생을하면 DOM의 처음부터 발생한곳 까지 capturing과 bubbling이 발생한다. 
   - Flow진행중 동일한 이벤트가 있으면 지정된 흐름(capturing, bubbling)에 맞추어 모든 이벤트가 실행 된다. 
   - Element가 가진 기본 이벤트를 맏고 싶은경우, preventDefault() 호출
   - 이벤트 Flow를 중단하고 싶은 경우에는 stopPropagation() 호출