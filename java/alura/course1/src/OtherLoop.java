import java.util.Scanner;

public class OtherLoop {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double rating = 0;
        double averageRating = 0;
        int totalRatings = 0;

        while (rating != -1) {
            System.out.println("Enter your rating for the movie or -1 to terminate:");
            rating = scanner.nextDouble();
            if (rating != -1) {
                averageRating += rating;
                totalRatings++;
            }
        }

        if (totalRatings > 0) {
            System.out.println("Avarage rating: " + (averageRating / totalRatings));
        } else {
            System.out.println("No ratings were provided");
        }


    }

}
