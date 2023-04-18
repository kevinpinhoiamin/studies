public class Main {

    public static void main(String[] args) {

        Movie myMovie = new Movie();
        myMovie.name = "Godfather";
        myMovie.releaseYear = 1972;
        myMovie.durationInMinutes = 175;

        myMovie.displayTechnicalSheet();
        myMovie.makeRating(8);
        myMovie.makeRating(5);
        myMovie.makeRating(10);
        System.out.println(myMovie.sumOfRatings);
        System.out.println(myMovie.totalRatings);
        System.out.println(myMovie.getAverageRatings());

    }

}