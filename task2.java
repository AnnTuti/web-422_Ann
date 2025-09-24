import java.util.Scanner;

public class BinaryHexConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nВыберите операцию:");
            System.out.println("1 - Двоичное в шестнадцатеричное");
            System.out.println("2 - Шестнадцатеричное в двоичное");
            System.out.println("0 - Выход");
            System.out.print("Ваш выбор: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Очистка буфера

            switch (choice) {
                case 1:
                    System.out.print("Введите двоичное число: ");
                    String binary = scanner.nextLine();

                    try {
                        int decimal = Integer.parseInt(binary, 2);
                        String hex = Integer.toHexString(decimal).toUpperCase();
                        System.out.println("Шестнадцатеричное представление: " + hex);
                    } catch (NumberFormatException e) {
                        System.out.println("Ошибка: некорректное двоичное число.");
                    }
                    break;

                case 2:
                    System.out.print("Введите шестнадцатеричное число: ");
                    String hexInput = scanner.nextLine();

                    try {
                        int decimal = Integer.parseInt(hexInput, 16);
                        String binaryOutput = Integer.toBinaryString(decimal);
                        System.out.println("Двоичное представление: " + binaryOutput);
                    } catch (NumberFormatException e) {
                        System.out.println("Ошибка: некорректное шестнадцатеричное число.");
                    }
                    break;

                case 0:
                    System.out.println("Выход из программы.");
                    return;

                default:
                    System.out.println("Неверный выбор. Повторите.");
            }
        }
    }
}