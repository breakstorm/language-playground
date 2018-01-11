package net.acmicpc;

public class problem9095 {
	static int count = 0;
	
	public static boolean Solution(int arg) {
		if(arg == 0) {
			//System.out.println("arg == 0");
			count += 1;
			return true;
		}
		if(arg < 0) {
			//System.out.print("arg < 0");
			return false;
		}
		
		Solution(arg - 1);
		
		Solution(arg - 2);
		
		Solution(arg - 3);
		
		return false;
	}
	public static void main(String[] args) {
		System.out.println(count);
		
		count = 0;
		Solution(4);
		System.out.println(count);
		
		count = 0;
		Solution(7);
		System.out.println(count);
		
		count = 0;
		Solution(10);
		System.out.println(count);
	}
}
