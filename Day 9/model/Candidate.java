package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import javax.persistence.OneToOne;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity

public class Candidate {
	@Id
//	@GeneratedValue(strategy = Gene)
	private int regno;
	private String name;
	private String dob;
	private String gender;
	private String dept;
	private String position;
	private String partyName;
	private long mobileNumber;
	private String email_id;
	private String password;
	

	@ManyToOne(fetch =FetchType.LAZY,cascade=CascadeType.ALL)
	private Admin admin;
	
//	@OneToOne(mappedBy = "candidate")
//	private Voter voter;
}
