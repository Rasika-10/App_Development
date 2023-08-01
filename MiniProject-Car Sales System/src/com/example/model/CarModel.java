package com.example.model;

public class CarModel {
	private int carId;
    private String brandName;   
    private String modelName;
    private String modelNumber;
    private int yearofModel;
	public int getCarId() {
		return carId;
	}
	public void setCarId(int carId) {
		this.carId = carId;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public String getModelName() {
		return modelName;
	}
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	public String getModelNumber() {
		return modelNumber;
	}
	public void setModelNumber(String modelNumber) {
		this.modelNumber = modelNumber;
	}
	public int getYearofModel() {
		return yearofModel;
	}
	public void setYearofModel(int yearofModel) {
		this.yearofModel = yearofModel;
	}
	public CarModel(int carId, String brandName, String modelName, String modelNumber, int yearofModel) {
		super();
		this.carId = carId;
		this.brandName = brandName;
		this.modelName = modelName;
		this.modelNumber = modelNumber;
		this.yearofModel = yearofModel;
	}
	
	public CarModel(String brandName, String modelName, String modelNumber, int yearofModel) {
		super();
		this.brandName = brandName;
		this.modelName = modelName;
		this.modelNumber = modelNumber;
		this.yearofModel = yearofModel;
	}
	@Override
	public String toString() {
		return "CarModel [carId=" + carId + ", brandName=" + brandName + ", modelName=" + modelName + ", modelNumber="
				+ modelNumber + ", yearofModel=" + yearofModel + "]";
	}
    

}
