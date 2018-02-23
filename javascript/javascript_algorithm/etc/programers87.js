function is_pair(s) {
  var pairStack = 0;
  var unpairStack = 0;
  for (var i = 0; i < s.length; i++) {
    // '('을 만나면  stack + 1
    // ')'을 만나서 if(스택) stack - 1 : return fasle
    if (s[i] === "(") pairStack++;
    if (s[i] === ")"){
      if(pairStack > 0) {
        pairStack--;
      } else {
        unpairStack++;
      }
    }
  }

  return (pairStack === 0 && unpairStack === 0) ? true : false ;

}

console.log(is_pair("(hello)()"));
console.log(is_pair(")(")); //false
console.log(is_pair("(")); //false
console.log(is_pair("hello()")); //true
console.log(is_pair("(so()())")); //true
console.log(is_pair("(())((()())())")); //true
console.log(is_pair("(()())")); //true
console.log(is_pair("())")); //false
console.log(is_pair(")(()))")); //false
console.log(is_pair("(so))")); //false
console.log(is_pair("python)(()))")); //false