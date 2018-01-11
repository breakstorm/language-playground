package book.topcoder;
import java.util.*;

public class crytography2 {
	public static int encrypt(int[] numbers) {
		int result = 1;
		
		Arrays.sort(numbers);
		numbers[0]++;
		
		for(int i = 0; i < numbers.length; i++){
			result *= numbers[i];
		}
		
		return result;
	}
	public static void main(String[] args) {
		int test1[] = {1,2,3};
		encrypt(test1);
	}
}
