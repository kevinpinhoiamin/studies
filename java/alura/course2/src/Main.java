import br.com.alura.course2.models.Movie;

public class Main {

    public static void main(String[] args) {

        Movie myMovie = new Movie();
        myMovie.setName("Godfather");
        myMovie.setReleaseYear(1972);
        myMovie.setDurationInMinutes(175);

        myMovie.displayTechnicalSheet();
        myMovie.makeRating(8);
        myMovie.makeRating(5);
        myMovie.makeRating(10);
        System.out.println("Total ratings: " + myMovie.getTotalRatings());
        System.out.println(myMovie.getAverageRatings());
        // myMovie.sumOfRatings = 1;
        // myMovie.totalRatings = 10;
        // System.out.println(myMovie.getAverageRatings());

    }

}