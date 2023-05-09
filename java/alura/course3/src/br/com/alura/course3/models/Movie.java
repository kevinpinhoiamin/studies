package br.com.alura.course3.models;

import br.com.alura.course3.calculations.Sortable;

public class Movie extends Title implements Sortable {

    private String director;

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    @Override
    public int getClassication() {
        return (int) this.getAverageRatings() / 2;
    }

    @Override
    public String toString() {
        return "Movie: " + this.getName() + " (" + this.getReleaseYear() + ")";
    }
}
