package com.example.model;

public class Manager {

	private int managerId;
	private String managerName;
	private String mobileNumber;
	public int getManagerId() {
		return managerId;
	}
	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	public Manager(int managerId, String managerName, String mobileNumber) {
		super();
		this.managerId = managerId;
		this.managerName = managerName;
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "Manager [managerId=" + managerId + ", managerName=" + managerName + ", mobileNumber=" + mobileNumber
				+ "]";
	}
	
}
