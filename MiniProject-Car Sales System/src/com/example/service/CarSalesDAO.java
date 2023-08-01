
package com.example.service;

import com.example.model.CarSales;

import java.sql.SQLException;
import java.util.List;

public interface CarSalesDAO {
    void addCarSales(CarSales carSales) throws SQLException;

    List<CarSales> getAllCarSales() throws SQLException;

    CarSales getCarSalesById(int salesId) throws SQLException;

    void updateCarSales(CarSales carSales) throws SQLException;

    void deleteCarSales(int salesId) throws SQLException;
}