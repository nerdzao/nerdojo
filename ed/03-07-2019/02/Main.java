public class Main {

    public static void main(String[] args) {

       int[] numurus = new int[101];
       String fizz = "Fizz";
       String buzz = "Buzz";

       for (int i = 1; i <= 100; i++) {
            numurus[i] = i;
       }

       for (int j = 1; j <= 100; j++) {
           if(numurus[j] % 3 == 0 && numurus[j] % 5 == 0) {
               System.out.println(fizz+buzz);
           } else if (numurus[j] % 3 == 0) {
               System.out.println(fizz);
           } else if (numurus[j] % 5 == 0) {
               System.out.println(buzz);
           } else {
               System.out.println(j);
           }
       }
    }

}

