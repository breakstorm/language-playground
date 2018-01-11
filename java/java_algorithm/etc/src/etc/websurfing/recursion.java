package etc.websurfing;

public class recursion {
	
	public static int sequentialSort(int[] arr, int begin, int target) {
		if(begin > arr.length-1) {
			return -1;
		}else if(arr[begin] == target) {
			return begin;
		}else {
			return sequentialSort(arr, begin+1, target);
		}

	}
	public static int sequentialSort2(int arr[], int end, int target) {
		if(0 > end) {
			return -1;
		}else if(arr[end] == target) {
			return end;
		}else {
			return sequentialSort2(arr , end - 1, target);
		}
	}
	
	public static void main(String[] args) {
		int arr[] = {1,2,3,4,5,6,7,8,9};
		System.out.println(sequentialSort(arr, 0 , 5));
		System.out.println(sequentialSort2(arr, 8, 5));
		
		
	}
	
}
