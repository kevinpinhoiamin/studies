package br.com.alura.course2.models;

import br.com.alura.course2.calculations.Sortable;

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
}
