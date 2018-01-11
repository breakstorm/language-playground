package com.hackerrank.www;

public class InsertionSort {

	public static int[] Solution(int[] arr) {
		
		for(int i = 1; i < arr.length; i++){
			int temp = arr[i];
			int aux = i - 1;
			
			while( (aux >= 0) && (arr[aux] > temp) ){
				arr[aux+1] = arr[aux];
				aux--;
			}
			arr[aux+1] = temp;
		}
		return arr;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] test = {31, 24, 12, 22, 11};
		
		Solution(test);
	}

}
