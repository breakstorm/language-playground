package book.topcoder;

public class crytography {

	public static int encrypt(int[] numbers) {
		int max = 1;
		int result = 0;
		for(int i = 0; i < numbers.length; i++){
			for(int j = 0; j < numbers.length; j++){
				max = i == j ? max* (numbers[j]+1) : max*numbers[j];
				
//				if(i == j) {
//					max = max * (numbers[j]+1);
//				}else {
//					max = max * numbers[j];
//				}
			}
			result = Math.max(max, result);
			max = 1;
		}
		return result;
	}
	
	public static void main(String[] args) {
		int test1[] = {1,2,3};
		int result = encrypt(test1);
	}
}
// 데이터중 1을 증가 시킨다. 단 대상은 증가후 모든수의 곱이 가장 큰값이 나오는 것을 증가시킨다.
// 입력 : {1,2,3} 출력 : {12}
// 입력 : {1,3,1,2,1,3} 출력 : {36}
