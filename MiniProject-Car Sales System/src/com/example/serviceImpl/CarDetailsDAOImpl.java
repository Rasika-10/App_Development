package com.example.serviceImpl;


import com.example.model.CarDetails;
import com.example.service.CarDetailsDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CarDetailsDAOImpl implements CarDetailsDAO {
    private Connection connection;

    public CarDetailsDAOImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void addCarDetails(CarDetails carDetails) throws SQLException {
        String sql = "INSERT INTO CarDetails (carId, managerId, brandName, modelName, carType, milage, fuelType, price) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, carDetails.getCarId());
            statement.setInt(2, carDetails.getManagerId());
            statement.setString(3, carDetails.getBrandName());
            statement.setString(4, carDetails.getModelName());
            statement.setString(5, carDetails.getCarType());
            statement.setDouble(6, carDetails.getMilage());
            statement.setString(7, carDetails.getFuelType());
            statement.setDouble(8, carDetails.getPrice());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<CarDetails> getAllCarDetails() throws SQLException {
        List<CarDetails> carDetailsList = new ArrayList<>();
        String sql = "SELECT * FROM CarDetails";
        try (Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(sql);
            while (resultSet.next()) {
                int carId = resultSet.getInt("carId");
                int managerId = resultSet.getInt("managerId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String carType = resultSet.getString("carType");
                double milage = resultSet.getDouble("milage");
                String fuelType = resultSet.getString("fuelType");
                double price = resultSet.getDouble("price");
                CarDetails carDetails = new CarDetails(carId, managerId, brandName, modelName, carType, milage, fuelType, price);
                carDetailsList.add(carDetails);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return carDetailsList;
    }

    @Override
    public CarDetails getCarDetailsById(int carId) throws SQLException {
        String sql = "SELECT * FROM CarDetails WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, carId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                int managerId = resultSet.getInt("managerId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String carType = resultSet.getString("carType");
                double milage = resultSet.getDouble("milage");
                String fuelType = resultSet.getString("fuelType");
                double price = resultSet.getDouble("price");
                return new CarDetails(carId, managerId, brandName, modelName, carType, milage, fuelType, price);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void updateCarDetails(CarDetails carDetails) throws SQLException {
        String sql = "UPDATE CarDetails SET managerId = ?, brandName = ?, modelName = ?, carType = ?, milage = ?, fuelType = ?, price = ? WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, carDetails.getManagerId());
            statement.setString(2, carDetails.getBrandName());
            statement.setString(3, carDetails.getModelName());
            statement.setString(4, carDetails.getCarType());
            statement.setDouble(5, carDetails.getMilage());
            statement.setString(6, carDetails.getFuelType());
            statement.setDouble(7, carDetails.getPrice());
            statement.setInt(8, carDetails.getCarId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteCarDetails(int carId) throws SQLException {
        String sql = "DELETE FROM CarDetails WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, carId);
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
