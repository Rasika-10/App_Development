package com.example.service;

import com.example.model.CarModel;

import java.sql.SQLException;
import java.util.List;

public interface CarModelDAO {

	void addCarModel(CarModel carModel) throws SQLException;
	

    List<CarModel> getAllCarModels() throws SQLException;

    CarModel getCarModelById(int carId) throws SQLException;

    void updateCarModel(CarModel carModel) throws SQLException;

    void deleteCarModel(int carId) throws SQLException;


	List<CarModel> getCarModelByBrandName(String brandName) throws SQLException;

	
}