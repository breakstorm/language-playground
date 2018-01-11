package com.hackerrank.www;
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class ArraysDS {

	public static void showAll(Iterator<String> it){
		while(it.hasNext()){
			System.out.print(it.next() + " ");
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// https://www.hackerrank.com/challenges/arrays-ds/problem 
		// 참고사이트1 : http://platonic.tistory.com/entry/Java-Collections-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-List-Set-Map-Tree-Stack-Iterator-Enumeration
		// 참고사이트2 : http://choipattern.blogspot.kr/2013/08/iterator.html 
		
		Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int arr[] = new int[n];
        for(int arr_i=0; arr_i < n; arr_i++){
            arr[arr_i] = in.nextInt();
            //System.out.print(arr[arr_i]);
        }
     
        //방법1. for문 실
        for(int arr_i = arr.length-1; arr_i >= 0; arr_i--){
            System.out.print(arr[arr_i] + " ");
        }
        
        //방법2. ArrayList 자료구조에 받아서 Iterator에 실
        List<String> list = new ArrayList<String>();
        list.add("1");
        list.add("2");
        list.add("3");
        list.add("4");
        
		Iterator<String> it = list.iterator();
		
		while(it.hasNext()){
			System.out.println(it.next());
		}
		showAll(list.iterator());
	}

}
