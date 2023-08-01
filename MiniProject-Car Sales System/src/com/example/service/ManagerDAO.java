package com.example.service;

import com.example.model.Manager;

import java.sql.SQLException;
import java.util.List;

public interface ManagerDAO {
    void addManager(Manager manager) throws SQLException;

    List<Manager> getAllManagers() throws SQLException;

    Manager getManagerById(int managerId) throws SQLException;

    void updateManager(Manager manager) throws SQLException;

    void deleteManager(int managerId) throws SQLException;
}

