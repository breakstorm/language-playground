function getMinSum(A,B){
  // 최소값*최대값의 누계 
  // 모든 경우의 수 
  
	var answer = 0;
  
  while(A.length){
    //값을 뽑고, 뽑은 값을 삭제
    var valueA = Math.max(...A);
    var indexA = A.indexOf(valueA)
    A.splice(indexA, 1);

    var valueB = Math.min(...B);
    var indexB = B.indexOf(valueB);
    B.splice(indexB, 1);

    answer += (valueA * valueB);
  }
  console.log(A.length, B.length);
  
	return answer;
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var tA = [1,2],
	tB = [3,4];

console.log(getMinSum(tA,tB));