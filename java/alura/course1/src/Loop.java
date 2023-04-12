import java.util.Scanner;

public class Loop {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double rating = 0;
        double averageRating = 0;

        for (int i = 0; i < 3; i++) {
            System.out.println("Enter your rating for the movie:");
            rating = scanner.nextDouble();
            averageRating += rating;
        }

        System.out.println("Avarage rating: " + (averageRating / 3));

    }

}
