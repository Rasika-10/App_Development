package com.example.demo.model;
import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Admin {
	@Id
	private int id;
	private String password;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="admin")
	private List<Voter> voters;
	
    @OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="admin")
    private List<Candidate> candidates;
	
}
