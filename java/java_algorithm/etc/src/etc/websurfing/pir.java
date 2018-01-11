package etc.websurfing;

import java.util.Arrays;

public class pir {

	public static void specialjudge(int[] input) {
//		Arrays.sort(input);
//		System.out.println(input[input.length-1] + input[input.length-2]);
//		System.out.print(input[input.length-1] + " ");
//		System.out.print(input[input.length-2]);
		
		
//		int firstMax = 0;
//		int secondMax = 0;
		int[] max = new int[2];
		int tempIndex = -1;
		
		for(int i = 0; i < max.length; i++){
			for(int j= 0; j < input.length; j++){
				if(max[i] < input[j]) {
					max[i] = input[j];
					tempIndex = j;
				}
				input[tempIndex] = -999;
			}
		}
		System.out.println("hello");
	}
	
	public static void main(String[] args) {
		int[] test = {28, -28, 27, 3, -22, 29, 2, 1, -2, 16, -8, 5, -7, 21, -25, -14, 26, -20, 15, 21};
		
		specialjudge(test);
	}
}


//입력 20개의 수가 입력으로 주어진다 -30 < n < 30  
//출력 최대합, 해당하는 수 출력 
//한 배열에서 최대값을 2개 출력 
