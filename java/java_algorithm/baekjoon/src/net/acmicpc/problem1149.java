package net.acmicpc;

import java.util.Scanner;

public class problem1149 {

	static int temp = 0;
	static int minTemp = 999999;
	static int flag = 9999;
	
	public static void Solution(int s, int[][] input, int house) {
		if(house == 3) {
			System.out.println("테스트 " + temp + " 맥스 ");
			return;
		}
		for(int i = 0; i<input[house].length; i++){
			if(flag == i) continue;
			if(input[house][i] < minTemp){
				minTemp = input[house][i];
				flag = i;
			}
//			System.out.println("테스트" + input[house][i] + " " + house);
		}
		System.out.println(" " + minTemp );
		temp = temp + minTemp;
		minTemp = 999999;
		System.out.println("입력 " + temp );
		Solution(s, input, house+1);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Scanner sc = new Scanner(System.in);
//		String s = sc.nextLine();
//		
//		String[] input = new String[Integer.parseInt(s)];
//		for(int i = 0; i < input.length; i++){
//			input[i] = sc.nextLine();
//		}
//		System.out.println(s);
		
		
		int s = 3;
		int[][] input = {{26, 40, 83},
		           		 {49, 60, 57},
		           		 {13, 89, 99}};
		System.out.println(input);
		int house = 0;
		
		Solution(s, input, house);
		
	}

}
