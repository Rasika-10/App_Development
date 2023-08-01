
package com.example.model;


public class CarSales {

	    private int salesId;
	    private String customerName;
	    private String customerNumber;
		private int carId;
		private String brandName;
		private String modelName;
		private String carType;
		private String dateOfPurchase;
		private double price;
		public int getSalesId() {
			return salesId;
		}
		public void setSalesId(int salesId) {
			this.salesId = salesId;
		}
		public String getCustomerName() {
			return customerName;
		}
		public void setCustomerName(String customerName) {
			this.customerName = customerName;
		}
		public String getCustomerNumber() {
			return customerNumber;
		}
		public void setCustomerNumber(String customerNumber) {
			this.customerNumber = customerNumber;
		}
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
		public String getDateOfPurchase() {
			return dateOfPurchase;
		}
		public void setDateOfPurchase(String dateOfPurchase) {
			this.dateOfPurchase = dateOfPurchase;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
		public CarSales(int salesId, String customerName,String customerNumber, int carId, String brandName,
				String modelName, String carType, String  dateOfPurchase, double price) {
			super();
			this.salesId = salesId;
			this.customerName = customerName;
			this.customerNumber = customerNumber;
			this.carId = carId;
			this.brandName = brandName;
			this.modelName = modelName;
			this.carType = carType;
			this.dateOfPurchase = dateOfPurchase;
			this.price = price;
		}
		@Override
		public String toString() {
			return "CarSales [salesId=" + salesId + ", customerName=" + customerName + ", customerNumber="
					+ customerNumber + ", carId=" + carId + ", brandName=" + brandName + ", modelName=" + modelName
					+ ", carType=" + carType + ", dateOfPurchase=" + dateOfPurchase + ", price=" + price + "]";
		}
		
}