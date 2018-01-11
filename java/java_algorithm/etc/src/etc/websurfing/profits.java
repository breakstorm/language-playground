package etc.websurfing;

import java.util.Arrays;

public class profits {
	static int[] flagTable = new int[3];
	static int[] maxTable = new int[3];
	static int count = 0;
	static int max = 0;
	static int moneyDefault = 0;
	static int companyDefault = 0;
	
	public static void solution(int money, int company, int[][] investTable){
		if(company <= 0){
			int temp = 0;
			for(int i = 0; i < flagTable.length; i++){
				temp += flagTable[i];
			}
			//System.out.println("money : " + money + "count : " + count + "max : " + max);
			if(temp > max){
				max = temp;
				maxTable = Arrays.copyOfRange(flagTable, 0, flagTable.length);
			}
			temp = 0;
			return;
		}
		
		
		for(int j = 0; j <= money; j++){
			flagTable[company-1] = investTable[j][company-1];
			count++;
			solution(money-j, company-1, investTable);
		}
		
		if(money == moneyDefault && company == companyDefault){
			System.out.println("max : " + max);
			for(int i = 0; i < maxTable.length; i++){
				System.out.print(maxTable[i]+" ");
			}
		}
		
		return;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int money = 4;
		int company = 3;
		int[][] investTable = {
				{0, 0, 0},
				{2, 1, 3},
				{5, 4, 4},
				{7, 9, 9},
				{8, 11, 10}
		};
		Arrays.fill(flagTable, -1);
		moneyDefault = money;
		companyDefault = company;
		
		solution(money, company, investTable);
	}

}
/*
기업에 자금을 투자하면 기업은 그 자금으로 이익을 창출해 일정한 금액을 투자자에게 되돌려 준다. 기업이 여러개가 있다면 가지고 있는 돈을 적절히 나누어서 투자하여 최대의 이익을 얻으면 된다. 어떤 기업에 자금을 투자하지 않으면 그 기업으로 부터는 당연히 얻게 되는 이익도 없다. 또 한 기업에 더 많은 돈을 투자하면 적은 돈을 투자하는 것보다 더 많은 이익을 되돌려 준다. 
M원의 돈을 가지고 있는 투자가가 있다. 이 돈을 N개의 기업에 적저히 나눠서 투자해 최대의 이익을 얻으려 한다. 이때의 투자 방식과 이익금을 계산하여라. 

입력 
첫줄에는 투자금액 M(300이하의 정수)과 그 기업의 수 N(20이하의 정수)이 주어진다. 그 다음i+1번 째 줄에는 i원을 각 기업에 투자했을 때의 이익이 주어진다. 
출력 
첫 줄에는 최대의 이익을 다음 줄에는 각 기업에 투자할 금액을 출력한다. 
입출력 예
입력 
4 3 
2 1 3
5 4 4 
7 9 9 
8 11 10 

출력
12
0 3 1
 */