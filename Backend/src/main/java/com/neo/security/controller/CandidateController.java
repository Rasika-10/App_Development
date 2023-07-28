package com.neo.security.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Candidate;
import com.neo.security.repository.CandidateRepository;
import com.neo.security.service.CandidateService;


import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/candidate")
public class CandidateController {
	@Autowired
	CandidateService service;
	CandidateRepository repo;
	
	
	@PostMapping("/save")
	public String addCandidate(@RequestBody Candidate candidate)
	{
		return service.addCandidate(candidate);
	}
	    
	@GetMapping("/get")
	public List<Candidate> get()
	{
		return service.getCandidate();
	}
	

	 @PutMapping("/put/{id}")
	    public Candidate updateCandidate(@PathVariable int id, @RequestBody Candidate candidate) {
	        return service.updateCandidate(id,candidate);
	        
	    }
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		return  service.deleteCandidateById(id);
	}
	
	@GetMapping("/get/{id}")
	public Optional<Candidate> get(@PathVariable int id)
	{
		return service.getById(id);
	}

}
