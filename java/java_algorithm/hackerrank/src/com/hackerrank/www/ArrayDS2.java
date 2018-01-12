package com.hackerrank.www;
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class ArrayDS2 {
	public static int calcurate(int[][] arr, int y, int x) {
        return arr[y][x] + arr[y][x+1] + arr[y][x+2] + arr[y+1][x+1] + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2];
    }
    
    public static int solution(int[][] arr) {
        int result = Integer.MIN_VALUE;
        //System.out.println(result);
        int temp = 0;
        for(int i = 0; i < arr.length-2; i++) {
            for(int j = 0; j < arr[i].length-2; j++) {
                temp = calcurate(arr, i, j);
                result = Math.max(result, temp);
            }
        }
        return result;
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int arr[][] = new int[6][6];
        for(int arr_i=0; arr_i < 6; arr_i++){
            for(int arr_j=0; arr_j < 6; arr_j++){
                arr[arr_i][arr_j] = in.nextInt();
            }
        }
        int result = solution(arr);
        System.out.println(result);
    }
}

