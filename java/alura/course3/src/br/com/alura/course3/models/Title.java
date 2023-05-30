package br.com.alura.course3.models;

public class Title implements Comparable<Title> {

    private String name;
    private int releaseYear;
    private boolean includedInPlan;
    private double sumOfRatings;
    private int totalRatings;
    private int durationInMinutes;

    public Title(String name, int releaseYear) {
        this.name = name;
        this.releaseYear = releaseYear;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public boolean isIncludedInPlan() {
        return includedInPlan;
    }

    public void setIncludedInPlan(boolean includedInPlan) {
        this.includedInPlan = includedInPlan;
    }

    public double getSumOfRatings() {
        return sumOfRatings;
    }

    public int getTotalRatings() {
        return totalRatings;
    }

    public int getDurationInMinutes() {
        return durationInMinutes;
    }

    public void setDurationInMinutes(int durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }

    public void displayTechnicalSheet() {
        System.out.println("Name: " + this.name);
        System.out.println("Release year: " + this.releaseYear);
    }

    public void makeRating(double rating) {
        this.sumOfRatings += rating;
        this.totalRatings++;
    }

    public double getAverageRatings() {
        return this.sumOfRatings / this.totalRatings;
    }

    @Override
    public int compareTo(Title title) {
        return title.getName().compareTo(title.getName());
    }
}
