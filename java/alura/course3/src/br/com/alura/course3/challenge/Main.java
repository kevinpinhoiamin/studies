package br.com.alura.course3.challenge;

import java.util.Collections;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the credit card limit: ");
        double limit = scanner.nextDouble();
        CreditCard creditCard = new CreditCard(limit);

        int exit = 1;
        while(exit != 0) {
            System.out.println("Enter the purchase description:");
            String description = scanner.next();

            System.out.println("Enter the purchase value:");
            double value = scanner.nextDouble();

            Purchase purchase = new Purchase(description, value);
            boolean purchaseDone = creditCard.launchPurchase(purchase);

            if (purchaseDone) {
                System.out.println("Purchase done!");
                System.out.println("Enter 0 to exit or 1 to continue");
                exit = scanner.nextInt();
            } else {
                System.out.println("Insufficient funds!");
                exit = 0;
            }
        }

        System.out.println("***********************");
        System.out.println("PURCHASES MADE:\n");
        Collections.sort(creditCard.getPurchases());
        for (Purchase p : creditCard.getPurchases()) {
            System.out.println(p.getDescription() + " - " + p.getValue());
        }
        System.out.println("\n***********************");

        System.out.println("\nCredit card balance: " +creditCard.getBalance());
    }

}
