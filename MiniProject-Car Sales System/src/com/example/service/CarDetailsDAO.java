
package com.example.service;


import com.example.model.CarDetails;

import java.sql.SQLException;
import java.util.List;

public interface CarDetailsDAO {
    void addCarDetails(CarDetails carDetails) throws SQLException;

    List<CarDetails> getAllCarDetails() throws SQLException;

    CarDetails getCarDetailsById(int carId) throws SQLException;

    void updateCarDetails(CarDetails carDetails) throws SQLException;

    void deleteCarDetails(int carId) throws SQLException;
}