package com.example.serviceImpl;



import com.example.model.CarSales;
import com.example.service.CarSalesDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CarSalesDAOImpl implements CarSalesDAO {
    private Connection connection;

    public CarSalesDAOImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void addCarSales(CarSales carSales) throws SQLException {
        String sql = "INSERT INTO CarSales (salesId, customerName, customerNumber, carId, brandName, modelName, carType, dateOfPurchase, price) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, carSales.getSalesId());
            statement.setString(2, carSales.getCustomerName());
            statement.setString(3, carSales.getCustomerNumber());
            statement.setInt(4, carSales.getCarId());
            statement.setString(5, carSales.getBrandName());
            statement.setString(6, carSales.getModelName());
            statement.setString(7, carSales.getCarType());
            statement.setString(8, carSales.getDateOfPurchase());
            statement.setDouble(9, carSales.getPrice());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<CarSales> getAllCarSales() throws SQLException {
        List<CarSales> carSalesList = new ArrayList<>();
        String sql = "SELECT * FROM CarSales";
        try (Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(sql);
            while (resultSet.next()) {
                int salesId = resultSet.getInt("salesId");
                String customerName = resultSet.getString("customerName");
                String customerNumber = resultSet.getString("customerNumber");
                int carId = resultSet.getInt("carId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String carType = resultSet.getString("carType");
                String dateOfPurchase = resultSet.getString("dateOfPurchase");
                double price = resultSet.getDouble("price");
                CarSales carSales = new CarSales(salesId, customerName, customerNumber, carId, brandName, modelName, carType, dateOfPurchase, price);
                carSalesList.add(carSales);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return carSalesList;
    }

    @Override
    public CarSales getCarSalesById(int salesId) throws SQLException {
        String sql = "SELECT * FROM CarSales WHERE salesId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, salesId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                String customerName = resultSet.getString("customerName");
                String customerNumber = resultSet.getString("customerNumber");
                int carId = resultSet.getInt("carId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String carType = resultSet.getString("carType");
                String dateOfPurchase = resultSet.getString("dateOfPurchase");
                double price = resultSet.getDouble("price");
                return new CarSales(salesId, customerName, customerNumber, carId, brandName, modelName, carType, dateOfPurchase, price);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void updateCarSales(CarSales carSales) throws SQLException {
        String sql = "UPDATE CarSales SET customerName = ?, customerNumber = ?, carId = ?, brandName = ?, modelName = ?, " +
                "carType = ?, dateOfPurchase = ?, price = ? WHERE salesId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, carSales.getCustomerName());
            statement.setString(2, carSales.getCustomerNumber());
            statement.setInt(3, carSales.getCarId());
            statement.setString(4, carSales.getBrandName());
            statement.setString(5, carSales.getModelName());
            statement.setString(6, carSales.getCarType());
            statement.setString(7, carSales.getDateOfPurchase());
            statement.setDouble(8, carSales.getPrice());
            statement.setInt(9, carSales.getSalesId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteCarSales(int salesId) throws SQLException {
        String sql = "DELETE FROM CarSales WHERE salesId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, salesId);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Close the connection after usage
    public void closeConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
