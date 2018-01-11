package etc.websurfing;

import java.util.Scanner;

public class minimumPrice {
	public static void solution(int goal, int[][] second, int price) {
		if(goal == 0){
			System.out.println(price);
			return;
		}
		int min = 1000;
		int minIndex = 0;
		for(int i = 0; i < second.length; i++){
			if(min > second[i][0]){
				min = second[i][0];
				minIndex = i;
			}
		}
		
		if(goal < second[minIndex][1]){
			price = price + (second[minIndex][0] * goal);
			second[minIndex][0] = 1000;		
			solution(0, second, price);
		}else{
			price = price + (second[minIndex][1]*second[minIndex][0]);
			second[minIndex][0] = 1000;
			solution(goal-second[minIndex][1], second, price);
		}
		
		
	}
	public static void main(String[] args) {
		int[] first = new int[2];
		Scanner sc = new Scanner(System.in);
		for(int i = 0; i < 2; i++){
			first[i] = sc.nextInt();
		}
		System.out.println(first);
		int[][] second = new int[first[1]][2];
		for(int i = 0; i < first[1]; i++){
			for(int j = 0; j < 2; j++) {
				second[i][j] = sc.nextInt();
			}
		}

//		int[] first = {100, 5};
//		int[][] second = {{5, 20}, {9, 40}, {3, 10}, {8, 80}, {6, 30}};
		int price = 0;
		int goal = first[0];
		solution(goal, second, price);
	}
}


/* 
 우유를 가공하는 회사에서 업자별 리터당 가격과 가진양이 주어질때 가장싸게 구하는 방법을 구하라. 
 
 입력형식
  - 사야할 우유의 양 ( 1 <= N <= 2,000,000)
  - 우유를 팔고자 하는 업자의 수 ( 0 <= M <= 5,000)
  - 각줄별 첫번째 파라메터 : 1리터당 우유 가격 ( 0 <= P <= 1,000)
  - 각줄별 두번째 파라메터 : 가진 우유의 양 (0 <= A <= 2,000,000)  

출력형식 
  - 최소 가격을 출력하라

입출력 예 
  100 5
  5 20
  9 40s
  3 10
  8 80
  6 30
  
  630 

 풀이컨셉 : 2번째 부터의 데이터에서 최소값부터 사용해서 할당량을 채운다.
 
 2번째 줄부터의 데이터를 정렬하는 방법 
 매번 최소값을 찾아서  할당 
  - 재귀를사용하는 방법 
  - 반복문을 사용하는 방법 
 */