package com.example.application;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

import com.example.model.CarDetails;
import com.example.model.CarModel;
import com.example.model.CarSales;
import com.example.model.Manager;
import com.example.serviceImpl.CarDetailsDAOImpl;
import com.example.serviceImpl.CarModelDAOImpl;
import com.example.serviceImpl.CarSalesDAOImpl;
import com.example.serviceImpl.ManagerDAOImpl;


public class Main {
    public static void main(String[] args) {
        // Replace these with your actual database credentials
        String dbUrl = "jdbc:mysql://localhost:3306/carSales";
        String dbUsername = "root";
        String dbPassword = "Rasika@710";

        try (Connection connection = DriverManager.getConnection(dbUrl, dbUsername, dbPassword)) {
            // Create DAO objects for each entity
            ManagerDAOImpl managerDAO = new ManagerDAOImpl(connection);
            CarModelDAOImpl carModelDAO = new CarModelDAOImpl(connection);
            CarDetailsDAOImpl carDetailsDAO = new CarDetailsDAOImpl(connection);
            CarSalesDAOImpl carSalesDAO = new CarSalesDAOImpl(connection);

            Scanner scanner = new Scanner(System.in);
            boolean exit = false;

            while (!exit) {
                System.out.println("Enter your choice:");
                System.out.println("1. Manager");
                System.out.println("2. CarModel");
                System.out.println("3. CarDetails");
                System.out.println("4. CarSales");
                System.out.println("5. Exit");

                int choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        handleManagerOperations(managerDAO, scanner);
                        break;
                    case 2:
                        handleCarModelOperations(carModelDAO, scanner);
                        break;
                    case 3:
                        handleCarDetailsOperations(carDetailsDAO, scanner);
                        break;
                    case 4:
                        handleCarSalesOperations(carSalesDAO, scanner);
                        break;
                    case 5:
                        exit = true;
                        break;
                    default:
                        System.out.println("Invalid choice! Please try again.");
                }
            }

        } catch (SQLException e) {
            System.err.println("Error while connecting to the database: " + e.getMessage());
        }
    }

    private static void handleManagerOperations(ManagerDAOImpl managerDAO, Scanner scanner) throws SQLException {
        boolean exit = false;

        while (!exit) {
            System.out.println("Manager Operations:");
            System.out.println("1. Add Manager");
            System.out.println("2. Retrieve Managers");
            System.out.println("3. Update Manager");
          
            System.out.println("4. Go Back");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    addManager(managerDAO, scanner);
                    break;
                case 2:
                    retrieveManagers(managerDAO);
                    break;
                case 3:
                    updateManager(managerDAO, scanner);
                    break;
                
                case 4:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void addManager(ManagerDAOImpl managerDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter Manager ID:");
        int managerId = scanner.nextInt();
        scanner.nextLine(); // Clear the buffer

        System.out.println("Enter Manager Name:");
        String managerName = scanner.nextLine();

        System.out.println("Enter Mobile Number:");
        String mobileNumber = scanner.nextLine();

        Manager manager = new Manager(managerId, managerName, mobileNumber);
        managerDAO.addManager(manager);
        System.out.println("Manager added successfully!");
    }

    private static void retrieveManagers(ManagerDAOImpl managerDAO) throws SQLException {
        List<Manager> allManagers = managerDAO.getAllManagers();
        if (allManagers.isEmpty()) {
            System.out.println("No managers found!");
        } else {
            System.out.println("All Managers:");
            for (Manager manager : allManagers) {
                System.out.println(manager);
            }
        }
    }

    private static void updateManager(ManagerDAOImpl managerDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter Manager ID to update:");
        int managerId = scanner.nextInt();
        Manager managerToUpdate = managerDAO.getManagerById(managerId);

        if (managerToUpdate == null) {
            System.out.println("Manager with ID " + managerId + " not found.");
        } else {
            scanner.nextLine(); // Clear the buffer

            System.out.println("Enter New Manager Name:");
            String managerName = scanner.nextLine();

            System.out.println("Enter New Mobile Number:");
            String mobileNumber = scanner.nextLine();

            managerToUpdate.setManagerName(managerName);
            managerToUpdate.setMobileNumber(mobileNumber);

            managerDAO.updateManager(managerToUpdate);
            System.out.println("Manager updated successfully!");
        }
    }



    private static void handleCarModelOperations(CarModelDAOImpl carModelDAO, Scanner scanner) throws SQLException {
        boolean exit = false;

        while (!exit) {
            System.out.println("CarModel Operations:");
            System.out.println("1. Add CarModel");
            System.out.println("2. Retrieve CarModels");
           
            System.out.println("3. Update CarModel");
            System.out.println("4. Delete CarModel");
            System.out.println("5. Get CarModel by BrandName");
            System.out.println("6. Go Back");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    addCarModel(carModelDAO, scanner);
                    break;
                case 2:
                    retrieveCarModels(carModelDAO);
                    break;
                    
                case 3:
                    updateCarModel(carModelDAO, scanner);
                    break;
                case 4:
                    deleteCarModel(carModelDAO, scanner);
                    break;
                case 5:
                    getCarModelByBrandName(carModelDAO, scanner);
                    break;
                case 6:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void addCarModel(CarModelDAOImpl carModelDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarModel ID:");
        int carModelId = scanner.nextInt();
        scanner.nextLine(); // Clear the buffer


        System.out.println("Enter CarModel Brand:");
        String brandName = scanner.nextLine();

        System.out.println("Enter CarModel Name:");
        String modelName = scanner.nextLine();
        
        System.out.println("Enter CarModel Number:");
        String modelNumber = scanner.nextLine();

        System.out.println("Enter CarModel Year:");
        int yearOfModel = scanner.nextInt();

        CarModel carModel = new CarModel(carModelId,  brandName, modelName,modelNumber, yearOfModel);
        carModelDAO.addCarModel(carModel);
        System.out.println("CarModel added successfully!");
    }

    private static void retrieveCarModels(CarModelDAOImpl carModelDAO) throws SQLException {
        List<CarModel> allCarModels = carModelDAO.getAllCarModels();
        if (allCarModels.isEmpty()) {
            System.out.println("No car models found!");
        } else {
            System.out.println("All CarModels:");
            for (CarModel carModel : allCarModels) {
                System.out.println(carModel);
            }
        }
    }
    private static void getCarModelByBrandName(CarModelDAOImpl carModelDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarModel Brand Name to retrieve:");
        String brandName = scanner.next();
        List<CarModel> carModels = carModelDAO.getCarModelByBrandName(brandName);

        if (carModels.isEmpty()) {
            System.out.println("No CarModels found for brand: " + brandName);
        } else {
            System.out.println("Retrieved CarModels for brand: " + brandName);
            for (CarModel carModel : carModels) {
                System.out.println(carModel);
            }
        }
    }
    
    private static void updateCarModel(CarModelDAOImpl carModelDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarModel ID to update:");
        int carModelId = scanner.nextInt();
        CarModel carModelToUpdate = carModelDAO.getCarModelById(carModelId);

        if (carModelToUpdate == null) {
            System.out.println("CarModel with ID " + carModelId + " not found.");
        } else {
            scanner.nextLine(); // Clear the buffer

            System.out.println("Enter New CarModel Name:");
            String modelName = scanner.nextLine();

            System.out.println("Enter New CarModel Brand:");
            String brandName = scanner.nextLine();

            System.out.println("Enter New CarModel Number:");
            String modelNumber = scanner.nextLine();

            System.out.println("Enter New CarModel Year:");
            int yearOfModel = scanner.nextInt();

            carModelToUpdate.setBrandName(brandName);
            carModelToUpdate.setModelName(modelName);
            carModelToUpdate.setModelNumber(modelNumber);
            carModelToUpdate.setYearofModel(yearOfModel);

            carModelDAO.updateCarModel(carModelToUpdate);
            System.out.println("CarModel updated successfully!");
        }
    }

    private static void deleteCarModel(CarModelDAOImpl carModelDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarModel ID to delete:");
        int carModelId = scanner.nextInt();
        CarModel carModelToDelete = carModelDAO.getCarModelById(carModelId);

        if (carModelToDelete == null) {
            System.out.println("CarModel with ID " + carModelId + " not found.");
        } else {
            carModelDAO.deleteCarModel(carModelId);
            System.out.println("CarModel deleted successfully!");
        }
    }

    private static void handleCarDetailsOperations(CarDetailsDAOImpl carDetailsDAO, Scanner scanner) throws SQLException {
        boolean exit = false;

        while (!exit) {
            System.out.println("CarDetails Operations:");
            System.out.println("1. Add CarDetails");
            System.out.println("2. Retrieve CarDetails");
            System.out.println("3. Update CarDetails");
            System.out.println("4. Delete CarDetails");
            System.out.println("5. Go Back");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    addCarDetails(carDetailsDAO, scanner);
                    break;
                case 2:
                    retrieveCarDetails(carDetailsDAO);
                    break;
                case 3:
                    updateCarDetails(carDetailsDAO, scanner);
                    break;
                case 4:
                    deleteCarDetails(carDetailsDAO, scanner);
                    break;
                case 5:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void addCarDetails(CarDetailsDAOImpl carDetailsDAO, Scanner scanner) throws SQLException {

        System.out.println("Enter CarDetails Car ID:");
        int carId = scanner.nextInt();
      // Clear the buffer
        System.out.println("Enter CarDetails Manager ID:");
        int managerId = scanner.nextInt();
        scanner.nextLine();
        System.out.println("Enter CarDetails Brand:");
        String brandName = scanner.nextLine();

        System.out.println("Enter CarDetails Model:");
        String modelName = scanner.nextLine();

        System.out.println("Enter CarDetails Type:");
        String carType = scanner.nextLine();

        System.out.println("Enter CarDetails Milage:");
        double milage = scanner.nextDouble();

        scanner.nextLine(); // Clear the buffer

        System.out.println("Enter CarDetails Fuel Type:");
        String fuelType = scanner.nextLine();

        System.out.println("Enter CarDetails Price:");
        double price = scanner.nextDouble();

       CarDetails carDetails = new CarDetails(carId,managerId ,brandName, modelName, carType, milage, fuelType, price);
        carDetailsDAO.addCarDetails(carDetails);
        System.out.println("CarDetails added successfully!");
    }

    private static void retrieveCarDetails(CarDetailsDAOImpl carDetailsDAO) throws SQLException {
        List<CarDetails> allCarDetails = carDetailsDAO.getAllCarDetails();
        if (allCarDetails.isEmpty()) {
            System.out.println("No car details found!");
        } else {
            System.out.println("All CarDetails:");
            for (CarDetails carDetails : allCarDetails) {
                System.out.println(carDetails);
            }
        }
    }

    private static void updateCarDetails(CarDetailsDAOImpl carDetailsDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarDetails ID to update:");
        int carId = scanner.nextInt();
        CarDetails carDetailsToUpdate = carDetailsDAO.getCarDetailsById(carId);

        if (carDetailsToUpdate == null) {
            System.out.println("CarDetails with ID " + carId + " not found.");
        } else {
            scanner.nextLine(); // Clear the buffer

            // Clear the buffer

            System.out.println("Enter New CarDetails Brand:");
            String brandName = scanner.nextLine();

            System.out.println("Enter New CarDetails Model:");
            String modelName = scanner.nextLine();

            System.out.println("Enter New CarDetails Type:");
            String carType = scanner.nextLine();

            System.out.println("Enter New CarDetails Mileage:");
            double milage = scanner.nextDouble();

            scanner.nextLine(); // Clear the buffer

            System.out.println("Enter New CarDetails Fuel Type:");
            String fuelType = scanner.nextLine();

            System.out.println("Enter New CarDetails Price:");
            double price = scanner.nextDouble();

            carDetailsToUpdate.setCarId(carId);
            carDetailsToUpdate.setBrandName(brandName);
            carDetailsToUpdate.setModelName(modelName);
            carDetailsToUpdate.setCarType(carType);
            carDetailsToUpdate.setMilage(milage);
            carDetailsToUpdate.setFuelType(fuelType);
            carDetailsToUpdate.setPrice(price);

            carDetailsDAO.updateCarDetails(carDetailsToUpdate);
            System.out.println("CarDetails updated successfully!");
        }
    }

    private static void deleteCarDetails(CarDetailsDAOImpl carDetailsDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter Car ID to delete:");
        int carId = scanner.nextInt();
        CarDetails carDetailsToDelete = carDetailsDAO.getCarDetailsById(carId);

        if (carDetailsToDelete == null) {
            System.out.println("CarDetails with ID " + carId + " not found.");
        } else {
            carDetailsDAO.deleteCarDetails(carId);
            System.out.println("CarDetails deleted successfully!");
        }
    }

    private static void handleCarSalesOperations(CarSalesDAOImpl carSalesDAO, Scanner scanner) throws SQLException {
        boolean exit = false;

        while (!exit) {
            System.out.println("CarSales Operations:");
            System.out.println("1. Add CarSales");
            System.out.println("2. Retrieve CarSales");
            System.out.println("3. Update CarSales");
            System.out.println("4. Delete CarSales");
            System.out.println("5. Go Back");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    addCarSales(carSalesDAO, scanner);
                    break;
                case 2:
                    retrieveCarSales(carSalesDAO);
                    break;
                case 3:
                    updateCarSales(carSalesDAO, scanner);
                    break;
                case 4:
                    deleteCarSales(carSalesDAO, scanner);
                    break;
                case 5:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }

    private static void addCarSales(CarSalesDAOImpl carSalesDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarSales ID:");
        int salesId = scanner.nextInt();
        scanner.nextLine(); // Clear the buffer

        System.out.println("Enter Customer Name:");
        String customerName = scanner.nextLine();

        System.out.println("Enter Customer Number:");
        String customerNumber = scanner.nextLine();

        System.out.println("Enter Car ID:");
        int carId = scanner.nextInt();
        scanner.nextLine(); // Clear the buffer

        System.out.println("Enter Brand:");
        String brandName = scanner.nextLine();

        System.out.println("Enter Model:");
        String modelName = scanner.nextLine();

        System.out.println("Enter Car Type:");
        String carType = scanner.nextLine();

        System.out.println("Enter Date of Purchase (YYYY-MM-DD):");
        String dateOfPurchase = scanner.nextLine();

        System.out.println("Enter Price:");
        double price = scanner.nextDouble();

        CarSales carSales = new CarSales(salesId, customerName, customerNumber, carId, brandName, modelName, carType, dateOfPurchase, price);
        carSalesDAO.addCarSales(carSales);
        System.out.println("CarSales added successfully!");
    }

    private static void retrieveCarSales(CarSalesDAOImpl carSalesDAO) throws SQLException {
        List<CarSales> allCarSales = carSalesDAO.getAllCarSales();
        if (allCarSales.isEmpty()) {
            System.out.println("No car sales found!");
        } else {
            System.out.println("All CarSales:");
            for (CarSales carSales : allCarSales) {
                System.out.println(carSales);
            }
        }
    }

    private static void updateCarSales(CarSalesDAOImpl carSalesDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarSales ID to update:");
        int salesId = scanner.nextInt();
        CarSales carSalesToUpdate = carSalesDAO.getCarSalesById(salesId);

        if (carSalesToUpdate == null) {
            System.out.println("CarSales with ID " + salesId + " not found.");
        } else {
            scanner.nextLine(); // Clear the buffer

            System.out.println("Enter New Customer Name:");
            String customerName = scanner.nextLine();

            System.out.println("Enter New Customer Number:");
            String customerNumber = scanner.nextLine();

            System.out.println("Enter New Car ID:");
            int carId = scanner.nextInt();
            scanner.nextLine(); // Clear the buffer

            System.out.println("Enter New Brand:");
            String brandName = scanner.nextLine();

            System.out.println("Enter New Model:");
            String modelName = scanner.nextLine();

            System.out.println("Enter New Car Type:");
            String carType = scanner.nextLine();

            System.out.println("Enter New Date of Purchase (YYYY-MM-DD):");
            String dateOfPurchase = scanner.nextLine();

            System.out.println("Enter New Price:");
            double price = scanner.nextDouble();

            carSalesToUpdate.setCustomerName(customerName);
            carSalesToUpdate.setCustomerNumber(customerNumber);
            carSalesToUpdate.setCarId(carId);
            carSalesToUpdate.setBrandName(brandName);
            carSalesToUpdate.setModelName(modelName);
            carSalesToUpdate.setCarType(carType);
            carSalesToUpdate.setDateOfPurchase(dateOfPurchase);
            carSalesToUpdate.setPrice(price);

            carSalesDAO.updateCarSales(carSalesToUpdate);
            System.out.println("CarSales updated successfully!");
        }
    }

    private static void deleteCarSales(CarSalesDAOImpl carSalesDAO, Scanner scanner) throws SQLException {
        System.out.println("Enter CarSales ID to delete:");
        int salesId = scanner.nextInt();
        CarSales carSalesToDelete = carSalesDAO.getCarSalesById(salesId);

        if (carSalesToDelete == null) {
            System.out.println("CarSales with ID " + salesId + " not found.");
        } else {
            carSalesDAO.deleteCarSales(salesId);
            System.out.println("CarSales deleted successfully!");
        }
    }
}