package net.acmicpc;

import java.util.Arrays;
import java.util.Scanner;

public class problem10809 {
	public static int[] solution(String array) {
		int[] alphabet = new int[26];
		int index = 0;
		Arrays.fill(alphabet, -1);
		
		for(int i = 0; i < array.length(); i++) {
//			System.out.print((int)array.charAt(i) + " ");
			index = (int)array.charAt(i) - 97;
			if(alphabet[index] == -1) alphabet[index] = i;
		}
		
		for(int i = 0; i < alphabet.length; i++) {
			System.out.print(alphabet[i] + " ");
		}
		
		return alphabet;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String s = sc.next();
		solution(s);	
	}
}
