package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Candidate;
@Repository
public interface CandidateRepo extends JpaRepository<Candidate,Integer>{


	


}
