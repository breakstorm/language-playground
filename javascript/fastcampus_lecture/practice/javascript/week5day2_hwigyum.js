/* 
```6. 핸드폰번호 가리기
핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꿔야 한다. 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라 예를들어 s가 '01033334444'면 *******4444를 리턴하고, '027778888'인 경우는 *****8888을 리턴한다.

function hideNumbers(str){

}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888```
```7. 문자열을 숫자로 바꾸기
strToInt 메소드는 문자열 str을 매개변수로 받는다. str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라. 예를들어 str이 '1234'이면 1234를 반환하고, '-1234'이면 -1234를 반환한다. str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

function strToInt(str){

}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234```
```8. 수박수박수박수박수박수?
waterMelon 함수는 정수 n을 매개변수로 입력받는다. 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다.

function waterMelon(n){

}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));```
 */

console.log("====== problem5 =====");
function hideNumbers(str){
  // var reg = /(\d){4}$/ig;
  // console.log(str.match(reg));
  // console.log(str.replace(reg, "*"));

  var result = str.slice(0, str.length-4);
  result += `****`;
  return result;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888

console.log("====== problem6 =====");
function strToInt(str){
  var result = parseInt(str);
  // console.log(typeof result);
  return result;
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234

console.log("====== problem7 =====");
function waterMelon(n){
  var result = '';
  for(var i = 0; i < n; i++) {
    result += ((i % 2) === 0) ? '수': '박' 
  }
  
  return result;
}

console.log('n이 3인 경우: '+ waterMelon(3)); //수박수
console.log('n이 4인 경우: '+ waterMelon(4)); //수박수박
