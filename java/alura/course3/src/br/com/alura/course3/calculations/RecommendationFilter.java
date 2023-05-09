package br.com.alura.course3.calculations;

public class RecommendationFilter {

    public void filter(Sortable sortable) {
        if (sortable.getClassication() >= 4) {
            System.out.println("It is among the favorites of the moment!");
        } else if (sortable.getClassication() >= 2) {
            System.out.println("It is very well rated at the moment!");
        } else {
            System.out.println("Put it on your list to watch later.");
        }
    }

}
