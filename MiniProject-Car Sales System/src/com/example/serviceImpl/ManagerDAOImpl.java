package com.example.serviceImpl;

import com.example.model.Manager;
import com.example.service.ManagerDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ManagerDAOImpl implements ManagerDAO {
    private Connection connection;

    public ManagerDAOImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void addManager(Manager manager) throws SQLException {
        String sql = "INSERT INTO manager (managerId, managerName, mobileNumber) VALUES (?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, manager.getManagerId());
            statement.setString(2, manager.getManagerName());
            statement.setString(3, manager.getMobileNumber());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Manager> getAllManagers() throws SQLException {
        List<Manager> managerList = new ArrayList<>();
        String sql = "SELECT * FROM manager";
        try (Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(sql);
            while (resultSet.next()) {
                int managerId = resultSet.getInt("managerId");
                String managerName = resultSet.getString("managerName");
                String mobileNumber = resultSet.getString("mobileNumber");
                Manager manager = new Manager(managerId, managerName, mobileNumber);
                managerList.add(manager);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return managerList;
    }

    @Override
    public Manager getManagerById(int managerId) throws SQLException {
        String sql = "SELECT * FROM manager WHERE managerId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, managerId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                String managerName = resultSet.getString("managerName");
                String mobileNumber = resultSet.getString("mobileNumber");
                return new Manager(managerId, managerName, mobileNumber);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void updateManager(Manager manager) throws SQLException {
        String sql = "UPDATE manager SET managerName = ?, mobileNumber = ? WHERE managerId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, manager.getManagerName());
            statement.setString(2, manager.getMobileNumber());
            statement.setInt(3, manager.getManagerId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteManager(int managerId) throws SQLException {
        String sql = "DELETE FROM manager WHERE managerId = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, managerId);
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
