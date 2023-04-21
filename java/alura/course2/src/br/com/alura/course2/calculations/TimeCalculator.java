package br.com.alura.course2.calculations;

import br.com.alura.course2.models.Title;

public class TimeCalculator {

    private int totalTime;


    public int getTotalTime() {
        return totalTime;
    }

    public void include(Title title) {
        System.out.println("Adding the duration in minutes of " + title);
        this.totalTime += title.getDurationInMinutes();
    }

}
