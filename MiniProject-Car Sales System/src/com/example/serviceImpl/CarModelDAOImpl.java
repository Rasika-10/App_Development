package com.example.serviceImpl;



import com.example.model.CarModel;
import com.example.service.CarModelDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CarModelDAOImpl implements CarModelDAO {
    private Connection connection;

    public CarModelDAOImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void addCarModel(CarModel carModel) throws SQLException {
        String sql = "INSERT INTO CarModel (carId, brandName, modelName, modelNumber, yearofModel) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, carModel.getCarId());
            statement.setString(2, carModel.getBrandName());
            statement.setString(3, carModel.getModelName());
            statement.setString(4, carModel.getModelNumber());
            statement.setInt(5, carModel.getYearofModel());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<CarModel> getAllCarModels() throws SQLException {
        List<CarModel> carModelList = new ArrayList<>();
        String sql = "SELECT * FROM CarModel";
        try (Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(sql);
            while (resultSet.next()) {
                int carId = resultSet.getInt("carId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String modelNumber = resultSet.getString("modelNumber");
                int yearofModel = resultSet.getInt("yearofModel");
                CarModel carModel = new CarModel(carId, brandName, modelName, modelNumber, yearofModel);
                carModelList.add(carModel);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return carModelList;
    }

    @Override
    public CarModel getCarModelById(int carId) throws SQLException {
        String sql = "SELECT * FROM CarModel WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, carId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
            	String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String modelNumber = resultSet.getString("modelNumber");
                int yearofModel = resultSet.getInt("yearofModel");
                return new CarModel(carId,brandName,modelName, modelNumber, yearofModel);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    @Override
    public List<CarModel> getCarModelByBrandName(String brandName) throws SQLException {
        List<CarModel> carModels = new ArrayList<>();
        String query = "SELECT * FROM CarModel WHERE brandName = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, brandName);
            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet.next()) {
                    int carId = resultSet.getInt("carId");
                    String modelName = resultSet.getString("modelName");
                    String modelNumber = resultSet.getString("modelNumber");
                    int yearOfModel = resultSet.getInt("yearOfModel");
                    carModels.add(new CarModel(carId, brandName, modelName, modelNumber, yearOfModel));
                }
            }
        }
        return carModels;
    }
    
    @Override
    public void updateCarModel(CarModel carModel) throws SQLException {
        String sql = "UPDATE CarModel SET modelName = ?, brandName = ?, modelNumber = ?, yearofModel = ? WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
        	statement.setString(1, carModel.getBrandName());
            statement.setString(2, carModel.getModelName());
            statement.setString(3, carModel.getModelNumber());
            statement.setInt(4, carModel.getYearofModel());
            statement.setInt(5, carModel.getCarId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteCarModel(int carId) throws SQLException {
        String sql = "DELETE FROM CarModel WHERE carId = ?";
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