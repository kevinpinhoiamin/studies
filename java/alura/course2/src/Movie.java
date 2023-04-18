public class Movie {

    String name;
    int releaseYear;
    boolean includedInPlan;
    double sumOfRatings;
    int totalRatings;
    int durationInMinutes;

    void displayTechnicalSheet() {
        System.out.println("Movie name: " + this.name);
        System.out.println("Release year: " + this.releaseYear);
    }

    void makeRating(double rating) {
        this.sumOfRatings += rating;
        this.totalRatings++;
    }

    double getAverageRatings() {
        return this.sumOfRatings / this.totalRatings;
    }

}
