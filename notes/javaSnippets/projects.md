Projects from CIT260 below:
// About me output statements
// CIT260-01
// Name: Matthias Arter
// April 21, 2021

package Week01;

public class Main {

    public static void main(String[] args) {
        System.out.println("Matthias Arter");
        System.out.println("CIT260-01");
        System.out.println("Spokane, WA");
        System.out.println("Pecan Pie");

    }
}
// end of w1dot1

// spelling "JAVA" with several rows of letters from the word Java.
// CIT260-01
// Name: Matthias Arter
// April 21, 2021

package Week01;

public class Main {

    public static void main(String[] args) {
        System.out.println("     J     A     V     V     A");
        System.out.println("     J    A A     V   V     A A");
        System.out.println("J    J   AAAAA     V V     AAAAA");
        System.out.println(" J  J   A     A     V     A     A");
    }
}
//end of w1dot2

// Converts Celsius to Fahrenheit
// CIT-260
// Matthias Arter
// April 28, 2021
// ---------------------------------


import java.util.Scanner;
public class Main {

    public static void main(String[] args) {

        // tells the user what the program does.
        System.out.println("Welcome, user! \n This program will convert Celsius to Fahrenheit.");

        // prompts the user to enter a temperature in degrees Celsius.
        System.out.println("Please enter a temperature in degrees Celsius: ");

        // gets the user's input and saves it in a variable declared as a double.
        Scanner input = new Scanner(System.in);
        double tempC = input.nextDouble();

        // converts the Celsius temperature to a temperature in degrees Fahrenheit,
        // using the formula tempF = (9/5) tempC + 32
        double tempF = 9.0 / 5 * tempC + 32.0;

        // outputs the Celsius temperature and the Fahrenheit temperature, with 2 digits after the decimal point.
        System.out.printf("%5.2f degrees Celsius is %5.2f degrees Fahrenheit.",tempC, tempF);

        // outputs a goodbye message.
        System.out.println("\n\nGoodbye!");

        // test case: 43.50 degrees Celsius is equal to 110.30 degrees Fahrenheit.
    }
}
// end of w2dot1

// Calculates tip, tax, and total value of bill for meal
// CIT-260
// Matthias Arter
// April 30, 2021
// --------------------------------

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {

        // declare tax rate
        final double TAX_RATE = 0.032;

        // create Scanner object, connect to console input
        Scanner input = new Scanner(System.in);
        Scanner input2 = new Scanner(System.in);

        // declare variables and set to zero
        double mealCost = 0;
        double tipPercentage = 0;
        double tipAmt = 0;
        double taxAmt = 0;
        double totAmt = 0;

        // tells the user what the program does
        System.out.println("Given the price of a meal and a percentage to use for the tip,\n" +
        "this program calculates the tip, the tax, and the total amount of the bill.");

        // prompts the user to enter a value for the cost of their meal
        System.out.print("Enter the cost of the meal: ");

        // gets the user's input and saves it in a variable declared as a double
        mealCost = input.nextDouble();

        // prompts the user to enter a percentage value for the tip
        System.out.print("Enter the tip percentage: ");

        // gets the user's input and saves it in a variable declared as a double
        tipPercentage = input2.nextDouble() / 100 ;

        // calculates the value of the tip, using the percentage entered by the user
        tipAmt = mealCost * tipPercentage;

        // calculates the tax on the meal. The tax rate is 3.2%

        taxAmt = TAX_RATE * mealCost;

        // calculates the total bill = meal cost + tip + tax
        totAmt = mealCost + tipAmt + taxAmt;

        // outputs the tip, the tax, and the total value of the bill
        // all values will be formatted to show a dollar sign and 2 digits after the decimal point
        System.out.printf("The tip is:      $%5.2f", tipAmt);
        System.out.printf("\nThe tax is:        $%5.2f", taxAmt);
        System.out.printf("\nThe total bill is: $%5.2f", totAmt);

        // outputs a goodbye message
        System.out.print("\nGoodbye.\n\n");

        /* test case:
            Enter the cost of the meal: 12.50
            Enter the tip percentage: 15

            The tip is $1.88
            The tax is $0.40
            The total bill is $14.78
        */
    }
}
// end of w2dot2

// Calculates future day of the week, and displays current and future day of the week.
// CIT-260
// Matthias Arter
// May 13, 2021
// ------------------------------


import java.util.Scanner;
public class Main {

    public static void main(String[] args) {

        // create Scanner objects, connect to console input
        Scanner input = new Scanner(System.in);
        Scanner input2 = new Scanner(System.in);

        // declare variables and initialize
        int aday = 0;
        int somedays = 0;
        int future = 0;
        String futureday = "someday";
        String thisday = "today";

        // tell user what this program does
        System.out.println("Given today's day of the week and some number of days in the future\n" +
        "this program will tell you the day of the week for the future day.");
        System.out.print("Please enter a value for today's day of the week (0 for Sunday, 1, for Monday, etc.): ");

        // checks user input for validity
        aday = input.nextInt();
        if (aday < 0 || aday > 6) {
            System.out.println("invalid input");
            System.out.print("Goodbye.");
            System.exit(0);
        }
        System.out.print("Enter the number of days in the future: ");

        // checks user input for validity
        somedays = input2.nextInt();
        if (somedays < 0) {
            System.out.printf("%d is invalid. You must enter a positive number.%n", somedays);
            System.out.print("Goodbye.");
            System.exit(1);
        }

        // calculates future day of week by taking the remainder of the sum of today and additional days
        future = (somedays + aday) % 7;

        // determines name of future weekday
        switch (future) {
            case 0: futureday = "Sunday"; break;
            case 1: futureday = "Monday"; break;
            case 2: futureday = "Tuesday"; break;
            case 3: futureday = "Wednesday"; break;
            case 4: futureday = "Thursday"; break;
            case 5: futureday = "Friday"; break;
            case 6: futureday = "Saturday"; break;
            default: futureday = "someday"; break;
        }

        // determines name of current weekday
        switch (aday) {
            case 0: thisday = "Sunday"; break;
            case 1: thisday = "Monday"; break;
            case 2: thisday = "Tuesday"; break;
            case 3: thisday = "Wednesday"; break;
            case 4: thisday = "Thursday"; break;
            case 5: thisday = "Friday"; break;
            case 6: thisday = "Saturday"; break;
            default: thisday = "today"; break;
        }

        // tells the user the names of today's weekday and the future weekday
        System.out.printf("Today is %s, and the future day is %s.\n", thisday, futureday);
        System.out.print("Goodbye.\n");

    }
}
// end of w3dot1

// Calculates and displays number of days in particular month of any year.
// CIT-260
// Matthias Arter
// May 13, 2021
// ---------------------------------

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {

        // create Scanner object, connect to console input
        Scanner input = new Scanner(System.in);
        Scanner input2 = new Scanner(System.in);

        // declare and initialize variables
        double year = 0;
        int userMonth = 0;
        String monthName = "month";
        int numDays = 0;
        boolean isLeapYear = false;

        // tells the user what the program does
        System.out.println("Given a year and a month in that year, this program will tell you\n" +
        "the number of days in that month.");

        // prompts the user to enter a year
        System.out.print("Enter a year: ");

        // gets the user's input and saves it
        year = input.nextDouble();

        // prompts the user to enter a value for the month(1 = Jan, 2 = Feb, etc)
        System.out.print("Enter a value for the month(1 = Jan, 2 = Feb, etc): ");

        // gets the user's input and saves it. If the value is is not between 1 and 12 inclusive, tell the user and terminate the program
        userMonth = input2.nextInt();
        if (userMonth < 1 || userMonth > 12) {
            System.out.printf("%d is invalid. Month values must be between between 1 and 12, inclusive.%n", userMonth);
            System.out.print("Goodbye.");
            System.exit(0);
        }

        // calculates the number of days in that month. Your program should correctly handle leap years (see listing 3.7 in the textbook)
        isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

        switch(userMonth) {
            case 1: monthName = "January"; numDays = 31; break;
            case 2: monthName = "February";
                    if (isLeapYear) numDays = 29;
                    else numDays = 28; break;
            case 3: monthName = "March"; numDays = 31; break;
            case 4: monthName = "April"; numDays = 30; break;
            case 5: monthName = "May"; numDays = 31; break;
            case 6: monthName = "June"; numDays = 30; break;
            case 7: monthName = "July"; numDays = 31; break;
            case 8: monthName = "August"; numDays = 31; break;
            case 9: monthName = "September"; numDays = 30; break;
            case 10: monthName = "October"; numDays = 31; break;
            case 11: monthName = "November"; numDays = 30; break;
            case 12: monthName = "December"; numDays = 31; break;
            default: monthName = "month"; numDays = 32; break;
        }

        // displays the number of days in that month.
        System.out.printf("%s of %.0f has %d days in it.%n",monthName, year, numDays);

        // outputs a goodbye message
        System.out.print("Goodbye.");
    }
}
// end of w3dot2

// converts hexadecimal digit to four digit binary number
// CIT-260
// Matthias Arter
// May 13, 2021
// ---------------------------------

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {

        // hex 0-9 and A-F (equivalent to decimal 0-15 and binary 0000 - 1111)
        // create Scanner object, connect to console input
        Scanner input = new Scanner(System.in);

        // tell the user what the program does
        System.out.println("Welcome, user! \n " +
        "This program will convert a hex digit to a binary number.");

        // prompts the user to enter a hexadecimal digit (0-9, A-F)
        System.out.print("Please enter a single hexadecimal digit (0-9, A-F): ");

        // gets the user's input and saves it, checks for validity
        String userIn = input.nextLine().trim();
        System.out.println(userIn);
        if (userIn.length() > 1) {
            System.out.format("Error, you must enter just a single digit. Program terminating.");
            System.out.print("\nGoodbye!");
            System.exit(1);
        }

        // convert to char data type and save in ch
        char ch = userIn.charAt(0);
        // System.out.println("character = " + ch);

        // test to see if it is between 0 and 9, A and F, exit if it is not
        if (ch < '0' || ch > 'F') {
            System.out.format("Error. %c is not a valid hexadecimal digit. Program terminating.", ch);
            System.out.print("\nGoodbye!");
            System.exit(2);
        }

        // determine equivalent binary number corresponding to the hexadecimal digit
        String binString = "";
        switch(ch) {
            // 0 - 0000
            case '0':
                binString = "0000";
                break;
            // 1 - 0001
            case '1':
                binString = "0001";
                break;
            // 2 - 0010
            case '2':
                binString = "0010";
                break;
            // 3 - 0011
            case '3':
                binString = "0011";
                break;
            // 4 - 0100
            case '4':
                binString = "0100";
                break;
            // 5 - 0101
            case '5':
                binString = "0101";
                break;
            // 6 - 0110
            case '6':
                binString = "0110";
                break;
            // 7 - 0111
            case '7':
                binString = "0111";
                break;
            // 8 - 1000
            case '8':
                binString = "1000";
                break;
            // 9 - 1001
            case '9':
                binString = "1001";
                break;
            // 10 - 1010
            case 'A':
                binString = "1010";
                break;
            // 11 - 1011
            case 'B':
                binString = "1011";
                break;
            // 12 - 1100
            case 'C':
                binString = "1100";
                break;
            // 13 - 1101
            case 'D':
                binString = "1101";
                break;
            // 14 - 1110
            case 'E':
                binString = "1110";
                break;
            // 15 - 1111
            case 'F':
                binString = "1111";
                break;
            default: binString = "binary output";

        }
        // output results
        System.out.format("%c in hexadecimal = %s in binary", ch, binString);

        // outputs goodbye message
        System.out.print("\n\nGoodbye!");
    }
}
// end of w4dot1

// calculates tax and generates pay stub
// CIT-260
// Matthias Arter
// May 13, 2021
// ---------------------------------

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {

        // declare final variables and initialize
        final double FEDERAL_TAX = .20;
        final double STATE_TAX = .09;

        // create Scanner object, connect to console input
        Scanner nameInput = new Scanner(System.in);
        Scanner hoursInput = new Scanner(System.in);
        Scanner wageInput = new Scanner(System.in);

        // tell the user what the program does
        System.out.println("Welcome, user! \n" +
        "Given your name, hours worked, and hourly wage, this program calculates your \n" +
        "gross pay, state withholding tax, federal withholding tax, and your net pay.");
        System.out.println("It then displays your pay stub.");

        // prompts the user to enter their full name
        System.out.print("Enter your first and last name: ");

        // gets the user's name and saves it
        String fullName = nameInput.nextLine();

        // prompts the user to enter their hours worked this week
        System.out.print("Enter the hours you worked this week: ");

        // gets the user's hours and saves it
        int hoursWorked = hoursInput.nextInt();

        // prompts the user to enter their hourly wage
        System.out.print("Enter your hourly wage: ");

        // gets the user's wage and saves it
        double hourlyWage = wageInput.nextDouble();

        // calculate gross pay
        double gross = hourlyWage * hoursWorked;

        // calculate state withholding tax
        double stateWH = gross * STATE_TAX;

        // calculate federal withholding tax
        double fedWH = gross * FEDERAL_TAX;

        // calculate net pay
        double netPay = gross - stateWH - fedWH;

        // output pay stub
        System.out.format("Pay Stub for %s", fullName);
        System.out.println("\nHours Worked: " + hoursWorked);
        System.out.format("Hourly Wage: $%4.2f", hourlyWage);
        System.out.format("\nGross Pay: $%5.2f",  gross);
        System.out.format("\nState Tax Withheld: $%4.2f", stateWH);
        System.out.format("\nFederal Tax Withheld: $%4.2f", fedWH);
        System.out.format("\nNet Pay: $%5.2f", netPay);

        // outputs goodbye message
        System.out.print("\n\nGoodbye!");
    }
}
// end of w4dot2

// Calculates and displays table of kilograms and pounds
// CIT-260
// Matthias Arter
// May 22, 2021
// ---------------------------------

public class Main {

    public static void main(String[] args) {

        // tells the user what the program does
        System.out.println("Welcome, user! \n" +
        "This program will calculate pounds per kilogram (1kg = 2.2 lbs) \n" +
        "and display the following table.");

        // prints out table headings and underscore dashes
        System.out.println("kilograms\t pounds");
        System.out.println("---------\t ------");

        // declare and initialize variables
        int kg = 1;
        double lbs = 2.2;

        // loop prints initial values and increments before next iteration
        for (int i = 1; i <= 15; i+=2) {
            System.out.format(" %d\t\t\t %4.1f%n", kg, lbs);
            kg += 2;
            lbs += 4.4;
        }

        // outputs goodbye message
        System.out.print("\nGoodbye!");
    }
}
// end of w5dot1

// Prints table of numbers from 100-1000 divisible by 5 and 6
// CIT-260
// Matthias Arter
// May 22, 2021
// ---------------------------------

public class Main {

    public static void main(String[] args) {

        // tells the user what the program does
        System.out.println("Welcome, user! \n" +
        "This program displays numbers from 100-1000 which are \n" +
        "divisible by 5 and 6.\n");

        // declare and initialize variables
        int n = 100;
        int length = 0;

        // loop continues until n = 1000
        while (n < 1000) {
            // checks each number for divisibility
            if (n % 5 == 0 && n % 6 == 0) {
                System.out.format("%d ", n);
                // tracks how many numbers have been printed on each line
                length++;
            }
            n++;
            // once there are 10 numbers on a line, starts new line
            if (length == 10) {
                System.out.println();
                length = 0;
            }
        }

        // outputs goodbye message
        System.out.print("\nGoodbye!");
    }
}
// end of w5dot2

// ==================== copy template upper and lower sections to new java files ==== //


// Converts Celsius to Fahrenheit (or whatever the program does)
// CIT-260
// Matthias Arter
// April 28, 2021 (or whatever the date is)
// ---------------------------------

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {

        // create Scanner object, connect to console input
        Scanner input = new Scanner(System.in);

        // tells the user what the program does
        System.out.println("Welcome, user! \n " +
        "This program will convert Celsius to Fahrenheit.");

        // prompts the user to enter info...
        System.out.print("Please enter a number from 1-10: ");

        // gets the user's input and saves it, checks for validity
        double bigMac = input.nextDouble();
        if (bigMac < 1 || bigMac > 10) {
            System.out.println(bigMac + " is not a valid entry.");
            System.out.print("\nGoodbye!");
            System.exit(0);
        }

        // computations
        bigMac = bigMac * 2;

        // output results
        System.out.println(bigMac + " is twice that number!");

        // outputs goodbye message
        System.out.print("\nGoodbye!");
    }
}
// ============================ template for new jave files above ============== //

// =========== snippets for reference ============ //

        System.out.printf("%5.2f degrees Celsius is %5.2f degrees Fahrenheit.",tempC, tempF);
