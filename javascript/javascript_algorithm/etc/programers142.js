// 행렬의 곱셈은, 곱하려는 두 행렬의 어떤 행과 열을 기준으로, 좌측의 행렬은 해당되는 행, 우측의 행렬은 해당되는 열을 순서대로 곱한 값을 더한 값이 들어갑니다. 행렬을 곱하기 위해선 좌측 행렬의 열의 개수와 우측 행렬의 행의 개수가 같아야 합니다. 곱할 수 있는 두 행렬 A,B가 주어질 때, 행렬을 곱한 값을 출력하는 productMatrix 함수를 완성해 보세요.

function productMatrix(A, B) {
	var answer = Array();
  
  //조건1 A의 열의개수 == B의 행의개수 
  //조건2 Answer의 행렬의수는 행=A행, 열=B열
  
  if(A[0].length !== B.length) return false;
  for(var i = 0; i < B[0].length; i++) {
    answer[i] = new Array();
  }
  
  
  
  console.log(answer);

	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var a = [ [1,2],[4,5] ];
var b = [ [1,2],[4,5] ];
console.log("결과 : " + productMatrix(a, b));