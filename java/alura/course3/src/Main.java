import br.com.alura.course3.calculations.RecommendationFilter;
import br.com.alura.course3.calculations.TimeCalculator;
import br.com.alura.course3.models.Episode;
import br.com.alura.course3.models.Movie;
import br.com.alura.course3.models.Series;

import java.util.ArrayList;

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

        RecommendationFilter filter = new RecommendationFilter();
        filter.filter(myMovie);

        Episode episode = new Episode();
        episode.setNumber(1);
        episode.setSeries(lost);
        episode.setTotalViews(100);
        filter.filter(episode);

        Movie dogville = new Movie();
        dogville.setDurationInMinutes(178);
        dogville.setName("Dogville");
        dogville.setReleaseYear(2003);
        dogville.makeRating(10);

        ArrayList<Movie> movieList = new ArrayList<>();
        movieList.add(dogville);
        movieList.add(myMovie);
        movieList.add(otherMovie);
        System.out.println("List size: " + movieList.size());
        System.out.println("First movie: " + movieList.get(0).getName());
        System.out.println(movieList);
        System.out.println("First movie toString: " + movieList.get(0).toString());
    }

}