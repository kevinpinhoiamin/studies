import br.com.alura.course2.calculations.TimeCalculator;
import br.com.alura.course2.models.Movie;
import br.com.alura.course2.models.Series;

public class Main {

    public static void main(String[] args) {

        Movie myMovie = new Movie();
        myMovie.setName("Godfather");
        myMovie.setReleaseYear(1972);
        myMovie.setDurationInMinutes(175);
        System.out.println("Movie duration: " + myMovie.getDurationInMinutes());

        myMovie.displayTechnicalSheet();
        myMovie.makeRating(8);
        myMovie.makeRating(5);
        myMovie.makeRating(10);
        System.out.println("Total ratings: " + myMovie.getTotalRatings());
        System.out.println(myMovie.getAverageRatings());
        // myMovie.sumOfRatings = 1;
        // myMovie.totalRatings = 10;
        // System.out.println(myMovie.getAverageRatings());

        Series lost = new Series();
        lost.setName("Lost");
        lost.setReleaseYear(2004);
        lost.displayTechnicalSheet();
        lost.setSeasons(6);
        lost.setEpisodesPerSeason(20);
        lost.setMinutesPerEpisode(50);
        System.out.println("Duration to marathon Lost: " + lost.getDurationInMinutes());

        Movie otherMovie = new Movie();
        otherMovie.setName("Avatar");
        otherMovie.setReleaseYear(2009);
        otherMovie.setDurationInMinutes(162);

        TimeCalculator calculator = new TimeCalculator();
        calculator.include(myMovie);
        calculator.include(otherMovie);
        calculator.include(lost);
        System.out.println(calculator.getTotalTime());

    }

}