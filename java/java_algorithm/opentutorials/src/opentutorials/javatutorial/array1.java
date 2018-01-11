package opentutorials.javatutorial;

public class array1 {
	public static void main(String[] args) {
		int[] classGroup = {1, 2, 3, 4, 5};
		String[] classGroup2 = new String[4];
//		int[][] classNumber = {}; 2중 배열을 사용하는 방
		
		
		for(int i = 0; i < classGroup.length; i++) {
			System.out.println(classGroup[i]);
		}
		System.out.println();
		System.out.println(classGroup2.length);
	}
}
