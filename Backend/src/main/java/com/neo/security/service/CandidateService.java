package com.neo.security.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Candidate;
import com.neo.security.repository.CandidateRepository;



@Service
public class CandidateService {
	    @Autowired
	    CandidateRepository repository;
		public String addCandidate(Candidate candidate) {
			repository.save(candidate);
			return "Added";
		}
	    
		public List<Candidate> getCandidate() {
			return repository.findAll();
		}
		

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
	            existingCandidate.setDep(candidate.getDep());
	            existingCandidate.setPosition(candidate.getPosition());
	            existingCandidate.setPartyname(candidate.getPartyname());
	            
	            return repository.save(existingCandidate);
	        } else {
	            throw new EntityNotFoundException("Candidate not found with ID: " + id);
	        }
		}

		
}
