import java.util.Scanner;

public class Challenge {

    public static void main(String[] args) {

        String name = "Clark Kent";
        String accountType = "checking account";
        double balance = 1599.99;
        int menuOption = 0;

        System.out.println("***********************");
        System.out.println("\nClient name: " + name);
        System.out.println("Account type: " + accountType);
        System.out.println("Current balance: " + balance);
        System.out.println("\n***********************");

        final String MENU = """
                ** Type your option **
                    1 - Consult balance
                    2 - Transfer value
                    3 - Receive value
                    4 - Exit
                                
                """;
        final int MENU_OPTION_CONSULT_BALANCE = 1;
        final int MENU_OPTION_TRANSFER_VALUE = 2;
        final int MENU_OPTION_RECEIVE_VALUE = 3;
        final int MENU_OPTION_EXIT = 4;

        final Scanner scanner = new Scanner(System.in);

        while (menuOption != MENU_OPTION_EXIT) {
            System.out.println(MENU);
            menuOption = scanner.nextInt();

            switch (menuOption) {
                case MENU_OPTION_CONSULT_BALANCE ->  System.out.println("The updated balance is " + balance);
                case MENU_OPTION_TRANSFER_VALUE -> {
                    System.out.println("What is the amount you want to transfer?");
                    double value = scanner.nextDouble();
                    if (value > balance) {
                        System.out.println("There is not enough balance to carry out the transfer.");
                    } else {
                        balance -= value;
                        System.out.println("New balance: " + balance);
                    }
                }
                case MENU_OPTION_RECEIVE_VALUE -> {
                    System.out.println("Amount receivable:");
                    double value = scanner.nextDouble();
                    balance += value;
                    System.out.println("New balance: " + balance);
                }
                default -> System.out.println("Invalid option");
            }
        }

    }

}
