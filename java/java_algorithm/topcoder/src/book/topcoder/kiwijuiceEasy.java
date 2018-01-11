package book.topcoder;

public class kiwijuiceEasy {
	public static int[] solution(int[] capa, int[] bottle, int[] fromId, int[] toId) {
//		System.out.println("test");
		
		for(int i = 0; i < fromId.length; i++) {
			
			int f = fromId[i];
			int t = toId[i];
			int space = capa[t] - bottle[t];
			
			//조건1 to에 부었을 다차는 경우 
			if(space >= bottle[f]) {
				int vol = bottle[f];
				bottle[t] += vol;
				bottle[f] = 0;
			} else {
				int vol = space;
				bottle[t] += vol;
				bottle[f] -= vol;
			}
		}
		
		return bottle;
	}
	
	public static void main(String[] args) {
		int[] capa = {10, 10};
		int[] bottle = {5, 8};
		int[] fromId = {0};
		int[] toId = {1};
		
		solution(capa, bottle, fromId, toId);
	}
}
