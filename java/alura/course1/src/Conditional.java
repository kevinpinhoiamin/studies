public class Conditional {

    public static void main(String[] args) {
        int releaseYear = 2022;
        boolean includedInPlan = true;
        double grade = 8.1;
        String planType = "plus";

        if (releaseYear > 2022) {
            System.out.println("Releases that customers are enjoying!");
        } else {
            System.out.println("Retro movie worth watching!");
        }

        if (includedInPlan || planType.equals("plus")) {
            System.out.println("You can watch the movie");
        } else {
            System.out.println("You must pay the movie rental");
        }
    }

}
