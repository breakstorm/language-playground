public class Solution {

   public static void main(String[] args) {
      System.out.println(solution(new String[]{"cba", "na", "n", "a"}, "banana"));
      System.out.println(solution(new String[]{"app", "ap", "p", "l", "e", "ple", "pp"}, "apple"));
      System.out.println(solution(new String[]{"ba", "an", "nan", "ban", "n"}, "banana"));
   }

   public static int solution(String[] puzzles, String input) {
      return solution(puzzles, input, 0, 0);
   }

   public static int solution(String[] puzzles, String input, int position, int depth) {
      int minResult = -1;

      depth++;
      for (String puzzle : puzzles) {
         if (!input.substring(position).startsWith(puzzle)) {
            continue;
         }

         if (input.equals(input.substring(0, position) + puzzle)) {
            return depth;
         }

         int result = solution(puzzles, input, position + puzzle.length(), depth);
         
         if (result == -1) {
            continue;
         }

         if (minResult != -1) {
            minResult = Math.min(minResult, result);
         } else {
            minResult = result;
         }
      }

      return minResult;
   }
}