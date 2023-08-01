package com.example.model;

public class CarDetails {
	
    private int carId;
    private int managerId;
    private String brandName;
    private String modelName;
    private String carType;
    private double milage;
    private String fuelType;
    private double price;
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
	public String getCarType() {
		return carType;
	}
	public void setCarType(String carType) {
		this.carType = carType;
	}
	public double getMilage() {
		return milage;
	}
	public void setMilage(double milage) {
		this.milage = milage;
	}
	public String getFuelType() {
		return fuelType;
	}
	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getManagerId() {
		return managerId;
	}
	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}
	public CarDetails(int carId, int managerId, String brandName, String modelName, String carType, double milage,
			String fuelType, double price) {
		super();
		this.carId = carId;
		this.managerId = managerId;
		this.brandName = brandName;
		this.modelName = modelName;
		this.carType = carType;
		this.milage = milage;
		this.fuelType = fuelType;
		this.price = price;
	}

	
	
	public CarDetails(int carId, String brandName, String modelName) {
	super();
	this.carId = carId;
	this.brandName = brandName;
	this.modelName = modelName;
}
	
	public CarDetails(int carId, String brandName, String modelName, String carType) {
		super();
		this.carId = carId;
		this.brandName = brandName;
		this.modelName = modelName;
		this.carType = carType;
	}
	
	public CarDetails(int carId, String brandName, String modelName, String carType, double milage, String fuelType,
			double price) {
		super();
		this.carId = carId;
		this.brandName = brandName;
		this.modelName = modelName;
		this.carType = carType;
		this.milage = milage;
		this.fuelType = fuelType;
		this.price = price;
	}
	@Override
	public String toString() {
		return "CarDetails [carId=" + carId + ", managerId=" + managerId + ", brandName=" + brandName + ", modelName="
				+ modelName + ", carType=" + carType + ", milage=" + milage + ", fuelType=" + fuelType + ", price="
				+ price + "]";
	}
	
	
	
    

}
