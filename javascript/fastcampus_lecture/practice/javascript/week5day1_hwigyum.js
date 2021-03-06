/*
1. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를들어 8808은 3, 8888은 4로 카운팅 해야 한다.

(hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

function getCount8 () {

}

console.log(getCount8()); // 4000

2. 짝수와 홀수
evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.

단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.
// if문
function evenOrOdd(num) {

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even
3. 문자열 다루기
alphaString46 함수는 문자열 s를 매개변수로 입력받는다. s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다

function alphaString46(s) {

}

console.log(alphaString46(‘1234’)); // true
console.log(alphaString46(‘9014’)); // true
console.log(alphaString46(‘723’));  // false
console.log(alphaString46(‘a234’)); // false
console.log(alphaString46(‘’));     // false
console.log(alphaString46());       // false
4. 문자열 내 p와 y의 개수
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 대소문자를 구별하지 않으며 s에 ‘p’의 개수와 ‘y’의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다. 예를들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.

function numPY(s) {

}

console.log(numPY(‘pPoooyY’)); // true
console.log(numPY(‘Pyy’));     // false
console.log(numPY(‘ab’));      // true
console.log(numPY(‘’));        // true
console.log(numPY());          // true
*/

function getCount8(){
  var sum = '';
  var cnt = 0;
  for(var i = 0; i < 10000; i++){
    sum += i;
  }
  for(var j = 0; j < sum.length; j++){
    sum[j]==='8' ? cnt++ : false;
  }
  console.log(cnt)
}
console.log("======== problem1 ========")
getCount8();

function evenOrOdd1(num) {
  var result = '';
  result = num % 2 === 0 ? 'Even' : 'Odd';
  return result;
}

function evenOrOdd2(num) {
  if (num % 2 === 0) return "Even";
  else {
    return "Odd";
  }
}
console.log("======== problem2-1 ========")
console.log(evenOrOdd1(2)); // Even
console.log(evenOrOdd1(3)); // Odd
console.log(evenOrOdd1(1000)); // Even
console.log("======== problem2-2 ========")
console.log(evenOrOdd2(2)); // Even
console.log(evenOrOdd2(3)); // Odd
console.log(evenOrOdd2(1000)); // Even
console.log("======== problem3 ========")

function alphaString46(s) {
  if(!s) return false;

  if(s.length >= 4 && s.length <= 6 && !isNaN(s)) {
    return true;
  }
  else { return false; }
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false
console.log("======== problem4 ========")

function numPY(s) {
  //문자열을 1개로 단일화 한다. 소문자 
  //p, y가 없으면 true
  //p개수 === y개수
  //값이 없는 경우 처리

  if(!s) { return true; }

  var str = s.toLowerCase(); 
  var pCount = 0;
  var yCount = 0;

  for(var i = 0; i < str.length; i++) {
    if(str[i] === 'p') pCount++;
    if(str[i] === 'y') yCount++;
  }

  if( pCount === yCount ) { return true; }
  else { return false; }
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true