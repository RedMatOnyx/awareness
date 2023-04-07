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

// Calculates future value of 10 yr investment
// CIT-260
// Matthias Arter
// May 29, 2021
// ---------------------------------

import java.util.Scanner;
public class Main {

    // create class level Scanner object, connect to console input
    static Scanner kbd = new Scanner(System.in);

    public static void main(String[] args) {

        // tells the user what the program does
        System.out.println("Welcome, user! \n" +
            "Given an investment amount and an annual interest rate, this program\n" +
            "will calculate the future value of the investment for a period of\n" +
            "ten years.");
        boolean again = true;

        // loops until valid inputs received and calculations/output complete
        while(again) {
            // prompts the user to enter info...
            System.out.print("Enter a positive, non-0 value for the investment: ");
            // gets and saves investment amt
            double investment = kbd.nextDouble();
            // ensures valid investment value
            if (investment <= 0) {
                System.out.println("Error: must be positive number, try again.");
                continue;
            }
            System.out.print("Enter an annual interest rate, between 0 and 100: ");
            // gets and saves interest rate
            double annualRate = kbd.nextDouble()/100;
            // converts annual rate to monthly interest rate
            double monthlyRate = annualRate/12;
            // ensures valid interest value
            if (monthlyRate <= 0 || monthlyRate > 100) {
                System.out.println("Error: Must be between 0 and 100, not 0, try again.");
                continue;
            }
            // output column headers
            System.out.println("\nYears\tFuture Value");
            int year = 1;
            // output year and value for each of 10 investment future values
            while(year <= 10) {
                double sum = futureValue(investment, monthlyRate,year);
                System.out.format(" %2d\t\t %7.2f%n", year, sum);
                year++;
            }
            // stops loop
            again = false;
        }
        System.out.print("\nGoodbye ...");
    }
    /**
     * the futureValue() method
     * purpose: calculate and return Future Value
     * @param investmentAmount, money put in account
     * @param monthlyInterestRate, monthly interest rate
     * @param years, wants desert
     * @return the sum of n1 and n2
     */
    public static double futureValue(double investmentAmount, double monthlyInterestRate, int years) {
        return investmentAmount*Math.pow(1.0 + monthlyInterestRate,years * 12);
    }
}
//end of w6dot1

// Prints table of converted Temperature values
// CIT-260
// Matthias Arter
// May 29, 2021
// ---------------------------------

public class Main {
    public static void main(String[] args) {

        // tells the user what the program does
        System.out.println("Welcome, user! \n" +
        "This program will display a table of equivalent temperature values:\n" +
        "Celsius from 40.0 to 31.0 in deg F, and \n" +
        "Fahrenheit from 120.0 to 30.0 in deg C.");

        // prints column header
        System.out.println("\nCelsius\t\tFahrenheit\t\t|\tFahrenheit\t\tCelsius");
        System.out.println("--------------------------------------------------------");
        int n = 0;

    // prints table of temperature values, 10 lines
        double Ctop = 40.0;
        double Ftop = 120.0;
        while(n<10) {
            double Far = celsiusToFahrenheit(Ctop);
            double Cel = fahrenheitToCelsius(Ftop);
            System.out.format("%.1f\t\t%5.1f\t\t\t|\t%5.1f\t\t\t%5.2f%n", Ctop, Far, Ftop, Cel);
            n++;
            Ctop --;
            Ftop -= 10;
        }
        System.out.print("\nGoodbye ...");
    }

    /**
     * the celsiusToFahrenheit() method
     * purpose: convert Celsius to Fahrenheit
     * @param tempCelsius, temp in Celsius
     * @return temp in Fahrenheit
     */
    public static double celsiusToFahrenheit(double tempCelsius){
        return 9.0 / 5 * tempCelsius + 32.0;
    }

    /**
     * the fahrenheitToCelsius() method
     * purpose: convert Fahrenheit to Celsius
     * @param tempFahrenheit, temp in Fahrenheit
     * @return temp in Celsius
     */
    public static double fahrenheitToCelsius(double tempFahrenheit){
        return (tempFahrenheit - 32) * 5 / 9.0;
    }
}
//end of w6dot2
Week7video example sales figures methods and two dimentional array
public class Main {
    final static int DAYS = 5;
    final static int EMPLOYEES = 4;

    public static void main(String[] args) {
	// set up array for weekly sales figures
    double[][] weeklySales = {
            {123.45, 123.2, 123.2, 123.2, 123.2},
            {456.2, 456.2, 456.2, 456.2, 456.2},
            {987.2, 987.2, 987.2, 987.2, 987.2},
            {321.2, 321.2, 321.2, 321.2, 321.2}
    };

    // setup array of employee names
    String[] employees = {"joe", "bill", "mary", "sally"};

    // compute total sales for the week and display it
    System.out.format("Total sales = $%-,5.2f%n", totalSales(weeklySales));

    // compute sales for Mon and display
    System.out.format("Monday sales = $%-,5.2f%n", salesForDay(weeklySales, 0));

    // compute sales for Mary
    System.out.format("Mary sales = $%-,5.2f%n", salesForEmployee(weeklySales,2));
    System.out.print(employees[2]);

    }

    /**
     * The totalSales() method
     * Purpose: add up and return all sales for week
     * @param sales, a two dimensional array of doubles
     * @return the total sales
     */
    public static double totalSales(double[][] sales) {
        double totalSales = 0.0;
        for(int row = 0; row < EMPLOYEES; row++) {
            for(int col = 0; col < DAYS; col++) {
                totalSales += sales[row][col];
            }
        }
        return totalSales;
    }
    /**
     * The salesForDay() method
     * Purpose: Add the sales for a specific day
     * @param sales the two-dimensional of sales figures
     * @param day the day
     * @return total for that day
     */
    public static double salesForDay(double[][] sales, int day) {
        double total = 0;
        for(int row = 0; row < EMPLOYEES; row++) {
            total += sales[row][day];
        }
        return total;
    }

    /**
     * The salesForEmployee() method
     * Purpose: sums the sales for a specific employee
     * @param sales - the array of sales figures
     * @param employee - the index into the names array
     * @return - the total sales for that employee
     */
    public static double salesForEmployee(double[][] sales, int employee) {
        double total = 0;
        for(int col = 0; col < DAYS; col++) {
            total += sales[employee][col];
        }
        return total;
    }
}


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



// Calculates and displays mean value and standard deviation given five numbers from the user
// CIT-260
// Matthias Arter
// June 8, 2021
// ---------------------------------

import java.util.Scanner;
public class Main {
    final static int DAYS = 5;
    final static int EMPLOYEES = 4;

    public static void main(String[] args) {

        // create Scanner object, connect to console input
        Scanner input = new Scanner(System.in);

        // tells the user what the program does
        System.out.println("Welcome, user! \n " +
        "This program computes the mean and the standard deviation for a set of numbers.");

        // gets numbers from user and saves to array
        double[] numSet = new double[5];
        for (int i=0; i<numSet.length; i++) {
            System.out.print("Enter a number: ");
            numSet[i] = input.nextDouble();
        }

        // calculate the mean value by sending set of numbers to a method
        double meanVal = meanCalc(numSet);

        // calculates the standard deviation using a method with parameters for mean and set of numbers
        double standardDevVal= standardDevCalc(numSet, meanVal);

        //outputs results to user
        System.out.format("\nThe mean of this set of numbers is %2.2f%n", meanVal);
        System.out.format("The standard deviation is %2.2f%n", standardDevVal);

        // goodbye message
        System.out.format("Goodbye...");
    }

    /**
     * The meanCalc() method
     * Purpose: finds average value for set of numbers
     * @param setNum, a single dimensional array of doubles
     * @return the mean value
     */
    public static double meanCalc(double[] setNum) {
        double setTotal = 0.0;
        // adds all the numbers in the set
        for (int i=0; i < setNum.length; i++) {
            setTotal += setNum[i];
            }
        // divides sum of numbers in set by how many numbers were in the set
        return setTotal / setNum.length;
    }

    /**
     * The standardDevCalc() method
     * Purpose: finds standard deviation of a set of numbers
     * @param setNum, a set of numbers
     * @param meanVal, average of set of numbers
     * @return the standard deviation
     */
    public static double standardDevCalc(double[] setNum, double meanVal) {
        double sigmaCalc = 0.0;
        // adds the square of the difference between each number in the set and the mean value
        for (int i=0; i < setNum.length; i++) {
            sigmaCalc += Math.pow((setNum[i] - meanVal), 2);
        }
        // takes the root of the quotient of sigmaCalc (from above) and one less than the number of numbers in the set
        return Math.sqrt(sigmaCalc/(setNum.length-1));
    }
}
end of 7dot1

// computes the number of hours worked for a set of hourly employees and displays it in descending order
// CIT-260
// Matthias Arter
// June 8, 2021
// ---------------------------------

public class Main {
    final static int DAYS = 7;
    final static int EMPLOYEES = 5;

    public static void main(String[] args) {

        // tells the user what the program does
        System.out.println("Welcome, user! \n" +
        "This Program computes the number of hours worked for a set of hourly employees\n" +
        "... and displays the hours in descending order after their corresponding employee name.");

        // setup array of employee names
        String[] employees = {"Tara Teamlead", "Harry Hacker", "Carl Coder", "Paula Programmer", "Darrin Debugger"};

        // set up array for weekly employee hours
        double[][] weeklyHours = {
            {0.0, 8.0, 8.0, 8.5, 8.0, 9.0, 0.0},
            {0.0, 9.0, 9.0, 8.5, 8.0, 7.5, 0.0},
            {0.0, 8.5, 8.0, 8.6, 8.6, 9.5, 2.0},
            {0.0, 4.75, 6.0, 6.25, 6.5, 0.0, 0.0},
            {0.0, 0.0, 0.0, 0.0, 5.25, 5.25, 6.0}
        };

        // compute hours for each employee and save to 1-dimensional array
        double[] employeeHours = new double[EMPLOYEES];
        for (int employee = 0; employee < EMPLOYEES; employee++) {
            employeeHours[employee] = hoursForEmployee(weeklyHours, employee);
        }
        // sort hours from highest to lowest with Selection Sort
        for (int i = 0; i < employeeHours.length - 1; i++) {
            // Find the maximum in the employeeHours[i..employeeHours.length-1] aka (list[i..list.length−1])
            double currentMax = employeeHours[i];
            // tracking employee name in same order as hours
            String currName = employees[i];
            int currentMaxIndex = i;

            // pick max value from set of employee hours
            for (int j = i + 1; j < employeeHours.length; j++) {
                if (currentMax < employeeHours[j]) {
                    currentMax = employeeHours[j];
                    currName = employees[j]; // employee name moved according to new position of hours
                    currentMaxIndex = j;
                }
            }

            // Swap employeeHours[i] with employeeHours[currentMaxIndex] if necessary
            // like swapping list[i] with list[currentMaxIndex] if necessary
            if (currentMaxIndex != i) {
                employeeHours[currentMaxIndex] = employeeHours[i]; // hours moved in array
                employees[currentMaxIndex] = employees[i]; // name moved also
                employeeHours[i] = currentMax; // hours moved in array
                employees[i] = currName; // name moved also
            }
        }//end of selection sort

        // displays name and total hours for each employee
        System.out.println("Employee Name\t\t\tTotal Hours");
        for (int employee = 0; employee < EMPLOYEES; employee++) {
            System.out.format("%-22s\t%5.2f%n", employees[employee], employeeHours[employee]);
        }
        System.out.print("\nGoodbye");
    }

    /**
     * The hoursForEmployee() method
     * Purpose: sums the hours for a specific employee
     * @param hours - the array of hours data
     * @param employee - the index into the names array
     * @return - the total hours for that employee
     */
    public static double hoursForEmployee(double[][] hours, int employee) {
        double total = 0;
        for(int col = 0; col < DAYS; col++) {
            total += hours[employee][col];
        }
        return total;
    }
}
end of 7dot2

// Creates 2 rectangle objects and displays height, width, area, perimeter
// CIT-260
// Matthias Arter
// June 14, 2021
// ---------------------------------

package Week8;

public class Rectangle {

    // declare member data
    private double height;
    private double width;

    /**
     * The no-arg constructor
     * No parameters - sets height and width to 1
     */

    public Rectangle( ) {
        height = 1;
        width = 1;
    }

    /**
     * The argument constructor
     * @param height, resets default height value to parameter value passed via argument from main to constructor
     * @param width, resets default width value to parameter value passed via argument from main to constructor
     */
    public Rectangle(double height, double width) {
        this.height = height;
        this.width = width;
    }

    // getters and setters

    /**
     * the getHeight method
     * @return height of rectangle object , default or otherwise current value
     */
    public double getHeight() {
        return height;
    }

    /**
     * the getWidth method
     * @return width of rectangle, default or otherwise current value
     */
    public double getWidth() {
        return width;
    }

    /**
     * the setHeight method
     * @param height, the height to set, as a double
     */
    public void setHeight(double height) {
        this.height = height;
    }

    /**
     * the setWidth method
     * @param width, the width to set, as a double
     */
    public void setWidth(double width) {
        this.width = width;
    }

    /**
     * the getArea method
     * @return calculation of the area of a rectangle
     */
    public double getArea( ) {
        return height * width;
    }

    /**
     * the getPerimeter method
     * @return calculation of the perimeter of a rectangle
     */
    public double getPerimeter( ) {
        return (2.0 * height) + (2.0 * width);
    }

    /**
     * the getWhat method
     * @return a string that tells the user what this program does
     */
    public static String getWhat( ) {
        return ("This program creates two rectangle objects and displays their height, width, area and perimeter.");
    }

}
end of 8dot1

// Tests Bank Account Class
// CIT-260
// Matthias Arter
// June 14, 2021
// ---------------------------------

package week8;

public class BankAccount {

    // declare member data
    private int accountNumber;
    private double balance;

    /**
     * The no-arg constructor
     * No parameters - sets accountNumber and balance to 0
     */

    public BankAccount( ) {
        accountNumber = 0;
        balance = 0;
    }

    /**
     * The argument constructor
     * @param accountNumber, resets default value
     * @param balance, resets default value
     */
    public BankAccount(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // getters and setters

    /**
     * the getAcctNum method
     * @return account number
     */
    public int getAcctNum() {
        return accountNumber;
    }

    /**
     * the getBal method
     * @return balance
     */
    public double getBal() {
        return balance;
    }

    /**
     * the setAcctNum method
     * @param accountNumber, account number to set, as an int
     */
    public void setAcctNum(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    /**
     * the setBal method
     * @param newBal, the balance to set, as a double
     */
    public void setBal(double newBal) {
        this.balance = newBal;
    }

    /**
     * the makeDeposit method
     * adds value of deposit to balance
     * returns deposit value to main for printing
     */

    public double makeDeposit(double deposit) {
        setBal(balance + deposit);
        return deposit;
    }

    /**
     * the makeWithdrawal method
     * subtracts withdrawal from balance
     * returns withdrawal to printing code in main
     */
    public double makeWithdrawal(double withdrawal) {
        double newBal = balance - withdrawal;
        setBal(newBal);
        return withdrawal;
    }

    /**
     * the getWhat method
     * @return a string that tells the user what this program does
     */
    public static String getWhat( ) {
        return ("This program tests the BankAccount class by . . .\n" +
                ". . .Creating account number 123 with an initial balance of $5.00");
    }

}
end of 8dot2

week9 has project folder for main and MyPoint classes
// Calculates distance between points using MyPoint class objects
// CIT-260
// Matthias Arter
// June 18, 2021
// ---------------------------------

package Week9;

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        // tells the user what the program does
        System.out.print("This program creates a point at (0,0) and a point at the coordinates entered by you.\n" +
                "It then computes and displays the distance from (0,0) to the point defined by you,\n" +
                "using three different methods.\n");

        // create scanner objects
        Scanner inputX = new Scanner(System.in);
        Scanner inputY = new Scanner(System.in);

        // create new MyPoint object
        MyPoint p1 = new MyPoint();
        // get input from user
        System.out.print("Enter the x coordinate of a point: ");
        //save input
        int userX = inputX.nextInt();
        // get input from user
        System.out.print("Enter the y coordinate of a point: ");
        //save input
        int userY = inputY.nextInt();
        // calculate distance and save it
        double dist1 = p1.distance(userX, userY);

        // create another MyPoint object and set user inputs as it's values
        MyPoint p2 = new MyPoint();
        p2.setX(userX);
        p2.setY(userY);

        // calculate distance using 2nd method
        double dist2 = p2.distance(p1);

        // calculate distance using 3rd method
        double dist3 = MyPoint.distance(p1, p2);

        // output to the user the distance using three methods
        System.out.format("Using method 1, the distance from (%d,%d) to (%d,%d) is %.2f%n", p1.getX(), p1.getY(), userX, userY, dist1);
        System.out.format("Using method 2, the distance from (%d,%d) to (%d,%d) is %.2f%n", p1.getX(), p1.getY(), p2.getX(), p2.getY(), dist2);
        System.out.format("Using method 2, the distance from (%d,%d) to (%d,%d) is %.2f%n", p1.getX(), p1.getY(), p2.getX(), p2.getY(), dist3);

        // goodbye message
        System.out.println("Goodbye");

    }
}
end of main

// Calculates distance between points using MyPoint class objects
// CIT-260
// Matthias Arter
// June 18, 2021
// ---------------------------------

package Week9;

public class MyPoint {
    private int x;
    private int y;

    /**
     * non parameter Constructor
     */
    public MyPoint() {
        x = 0;
        y = 0;
    }

    /**
     * parameterised constructor
     * @param x for x value
     * @param y for y value
     */
    public MyPoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // getters and setters

    /**
     * the setX() method
     * @param x value
     */
    public void setX(int x) {this.x = x;}

    /**
     * the setY() method
     * @param y value
     */
    public void setY(int y) {this.y = y;}

    /**
     * the getX() method
     * @return value of x
     */
    public int getX( ) {
        return x;
    }

    /**
     * the getY() method
     * @return value of y
     */
    public int getY( ) {
        return y;
    }

    /**
     * the distance method with two parameters from user input
     * @param xCoord is x value from user
     * @param yCoord is y value from user
     * @return distance calculation
     */
    public double distance(int xCoord, int yCoord) {
        return Math.sqrt(Math.pow((xCoord - x),2) + Math.pow((yCoord - y),2));

    }

    /**
     * the distance method with a single class object as a parameter
     * @param p is a MyPoint object
     * @return value of distance calculation
     */
    public double distance(MyPoint p) {
        return Math.sqrt(Math.pow((this.x - p.getX()),2) + Math.pow((this.y - p.getY()),2));
    }

    /**
     * the distance method with two MyPoint objects as parameters
     * @param mp1 is the MyPoint object containing the first pair of coordinate
     * @param mp2 is the MyPoint object containing the second pair of coordinates
     * @return distance calculation
     */
    public static double distance(MyPoint mp1, MyPoint mp2) {
        return Math.sqrt(Math.pow((mp1.getX() - mp2.getX()),2) + Math.pow((mp1.getY() - mp2.getY()),2));
    }

}
end of MyPoint (week9)

// tests triangle object which extends GeometricObject, calculates area of triangle
// CIT-260
// Matthias Arter
// June 30, 2021
// ---------------------------------

package Week10;

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
	// write your code here
        System.out.println("This program gets input for a triangle from the user.");
        System.out.println("It then creates a Triangle object and displays its description.");


        // ask user for color, store input
        System.out.println("\nEnter the color of the Triangle (e.g. red):");
        Scanner inputColor = new Scanner(System.in);
        String color = inputColor.next();

        // ask user if filled, store input
        System.out.println("Is the triangle filled (y or n):");
        Scanner inputFilled = new Scanner(System.in);
        String filledInput = inputFilled.next();

        // use String answer to set a boolean variable
        boolean answer;
        if (filledInput.equals("y")) { //filledInput replaced with cuan
            answer = true;
        }
        else answer = false;

        // get side lengths from user, save input
        System.out.println("Enter the non-zero, positive lengths of the three sides of the triangle:");
        Scanner firstSide = new Scanner(System.in);
        double a = firstSide.nextDouble();
        double b = firstSide.nextDouble();
        double c = firstSide.nextDouble();

        // make new Triangle object
        Triangle triangle = new Triangle(a, b, c, color, answer);

        // print data about triangle object to user
        System.out.println();
        System.out.println("Triangle Output:");
        System.out.println(triangle.toString());
        System.out.format("Area = %.2f", triangle.getArea());

        // goodbye message
        System.out.format("\n\nGoodbye%n");
    }
}

// tests triangle object which extends GeometricObject, calculates area of triangle
// CIT-260
// Matthias Arter
// June 30, 2021
// ---------------------------------

package Week10;

public class Triangle extends GeometricObject {
    private double side1;
    private double side2;
    private double side3;
    private double area;

    /**
     * non parameterized constructor
     */
    public Triangle( ) {
    }

    /**
     * parameterised constructor
     * @param side1 length of triangle
     * @param side2 length of triangle
     * @param side3 length of triangle
     * @param color of triangle
     * @param filled, boolean state of triangle
     */
    public Triangle(double side1, double side2, double side3, String color,
                    boolean filled) {
        super(color, filled);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    // getters and setters
    /**
     * the getSide1 method
     * @return length of side1
     */
    public double getSide1( ) {
        return side1;
    }

    /**
     * the getSide2 method
     * @return length of side2
     */
    public double getSide2( ) {
        return side2;
    }

    /**
     * the getSide3 method
     * @return length of side3
     */
    public double getSide3( ) {
        return side3;
    }

    /**
     * the setSide1 method
     * @param side1 is set
     */
    public void setSide1(double side1) {
        this.side1 = side1;
    }

    /**
     * the setSide2 method
     * @param side2 is set
     */
    public void setSide2(double side2) {
        this.side2 = side2;
    }

    /**
     * the setSide3 method
     * @param side3 is set
     */
    public void setSide3(double side3) {
        this.side3 = side3;
    }

    /**
     * the getArea method
     * @return area of the triangle using Heron's formula
     */
    public double getArea( ) {
        area = (side1 + side2 + side3) / 2;
        return area;
    }

    /**
     * the toString method
     * @return data from triangle object with additional data not provided by parent method of the same name
     */
    @Override
    public String toString() {
        return "side1 = " + side1 + ", side2 = " + side2 + ", side3 = " + side3 + "\n" + super.toString();
    }
}


// tests triangle object which extends GeometricObject, calculates area of triangle
// CIT-260
// Matthias Arter
// June 30, 2021
// below code provided by textbook
// ---------------------------------

package Week10;

public class GeometricObject {
    private String color = "white";
    private boolean filled = false;
    private java.util.Date dateCreated;

    /** Construct a default geometric object */
    public GeometricObject() {
        dateCreated = new java.util.Date();
    }

    /** Construct a geometric object with the specified color
     * and filled value */
    public GeometricObject(String color, boolean filled) {
        dateCreated = new java.util.Date();
        this.color = color;
        this.filled = filled;
    }

    /** Return color */
    public String getColor() {
        return color;
    }

    /** Set a new color */
    public void setColor(String color) {
        this.color = color;
    }

    /** Return filled. Since filled is boolean,
     its getter method is named isFilled */
    public boolean isFilled() {
        return filled;
    }

    /** Set a new filled */
    public void setFilled(boolean filled) {
        this.filled = filled;
    }

    /** Get dateCreated */
    public java.util.Date getDateCreated() {
        return dateCreated;
    }

    /** Return a string representation of this object */
    public String toString() {
        return "created on " + dateCreated + "\ncolor: " + color +
                " and filled = " + filled;
    }
}



