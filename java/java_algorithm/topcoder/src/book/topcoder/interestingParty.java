package book.topcoder;

public class interestingParty {

	public static int bestInvitation(String[] first, String[] second) {
		int i, j;
		int ans = 0;
		
		for(i = 0; i < first.length; i++) {
			int f = 0;
			int s = 0;
			for(j = 0; j < first.length; j++) {
				if(first[i].equals(first[j])) f++;
				if(first[i].equals(second[j])) f++;
				if(second[i].equals(first[j])) s++;
				if(second[i].equals(second[j])) s++;
			}
			ans = Math.max(f,  ans);
			ans = Math.max(s,  ans);
		}
		
		return ans;
	}
	
	public static void main(String[] args) {
		String[] a = {"fishing", "gardening", "swimming", "fishing"};
		String[] b = {"hunting", "fishing", "fishing", "biting"};
		int ans = bestInvitation(a, b);
	}
}
