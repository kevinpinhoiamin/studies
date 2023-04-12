import java.util.Scanner;

public class Reading {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Type your favorite movie:");
        String movie = scanner.nextLine();
        System.out.println("What is the release year?");
        int releaseYear = scanner.nextInt();
        System.out.println("Enter your rating for the movie:");
        double rating = scanner.nextDouble();

        System.out.println(movie);
        System.out.println(releaseYear);
        System.out.println(rating);

    }

}
