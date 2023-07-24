package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Candidate;
import com.example.demo.repository.CandidateRepo;

import jakarta.persistence.EntityNotFoundException;


@Service
public class CandidateService {
    @Autowired
    CandidateRepo repository;
	public String addCandidate(Candidate candidate) {
		repository.save(candidate);
		return "Added";
	}
	public List<Candidate> getCandidate() {
		return repository.findAll();
	}
	
//	public String updateCandidate(Candidate candidate, int id) {
//		repository.save(candidate,id);
//		return "Updated";
//	}
	public String deleteCandidateById(int id) {
		repository.deleteById(id);
		return "Deleted!!..";
	}
	public Optional<Candidate> getById(int id) {
		return repository.findById(id);
	}
	public Candidate updateCandidate(int id, Candidate candidate) {
		Optional<Candidate> existingCandidateOptional = repository.findById(id);

        if (existingCandidateOptional.isPresent()) {
            Candidate existingCandidate = existingCandidateOptional.get();
            existingCandidate.setName(candidate.getName());
            existingCandidate.setRegno(candidate.getRegno());
            existingCandidate.setPosition(candidate.getPosition());
            existingCandidate.setPartyname(candidate.getPartyname());
            return repository.save(existingCandidate);
        } else {
            throw new EntityNotFoundException("Candidate not found with ID: " + id);
        }
	}

}
