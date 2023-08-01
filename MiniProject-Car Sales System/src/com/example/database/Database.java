
package com.example.database;
import java.sql.*;
public class Database {
	static Connection con;
	public static Connection createc() 
		{	
			try 
			{
				//load the driver
				Class.forName("com.mysql.cj.jdbc.Driver");
				
				//create the Connection
				String user = "root"; 
				String password = "Rasika@710"; 
				String url = "jdbc:mysql://localhost:3306/carSales";
				con = DriverManager.getConnection(url,user,password);
			}
			catch(Exception e) 
			{
				e.printStackTrace();
			}
			return con;
		}
}