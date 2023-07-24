package com.neo.security.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.User;
import com.neo.security.service.UserServiceImpl;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v4/user")
public class Usercontroller {

	@Autowired
	private UserServiceImpl service;

	@GetMapping("/get")
	public List<User> getUsers(){
		return service.getAllUsers();
	}
	
	@GetMapping("/get/{email}")
	public User getUserByEmail(@PathVariable String email){
		return service.getUserByEmail(email);
	}
	
	
}
