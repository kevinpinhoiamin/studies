package br.com.alura.course3.mymusics.models;

public class Audio {

    private String title;
    private int totalPlays;
    private int totalLikes;
    private int classification;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getTotalPlays() {
        return totalPlays;
    }

    public int getTotalLikes() {
        return totalLikes;
    }

    public int getClassification() {
        return classification;
    }

    public void like() {
        this.totalLikes++;
    }

    public void play() {
        this.totalPlays++;
    }

}
