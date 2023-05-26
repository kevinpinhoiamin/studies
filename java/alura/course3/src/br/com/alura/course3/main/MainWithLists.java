package br.com.alura.course3.main;

import br.com.alura.course3.models.Movie;
import br.com.alura.course3.models.Series;
import br.com.alura.course3.models.Title;

import java.util.ArrayList;

public class MainWithLists {

    public static void main(String[] args) {

        Movie myMovie = new Movie("Godfather", 1972);
        myMovie.makeRating(9);
        Movie otherMovie = new Movie("Avatar", 2009);
        otherMovie.makeRating(6);
        var paulosMovie = new Movie("Dogville", 2003);
        paulosMovie.makeRating(10);
        Series lost = new Series("Lost", 2004);

        Movie f1 = paulosMovie;

        ArrayList<Title> list = new ArrayList<>();
        list.add(paulosMovie);
        list.add(myMovie);
        list.add(otherMovie);
        list.add(lost);

        for (Title item: list) {
            System.out.println(item.getName());
            if (item instanceof Movie movie && movie.getClassication() > 2) {
                System.out.println("Classification: " + movie.getClassication());
            }

        }

    }

}
