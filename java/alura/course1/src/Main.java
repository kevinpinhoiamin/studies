public class Main {
    public static void main(String[] args) {
        System.out.println("This is the Screen Match");
        System.out.println("Filme: Top Gun: Maverick");

        int releaseYear = 2022;
        System.out.println("Release year: " + releaseYear);
        boolean includedInPlan = true;
        double rating = 8.1;

        // Average rating calculated from 3 grades
        double averageRating = (9.8 + 6.3 + 8.0) / 3;
        System.out.println(averageRating);

        String synopsis = """
                Top Gun Movie
                Adventure movie with heartthrob from the 80's
                Very good!
                Release year
                """ + releaseYear;
        System.out.println(synopsis);

        int classification = (int) (averageRating / 2);
        System.out.println(classification);
    }
}