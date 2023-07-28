package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neo.security.entity.Candidate;


@Repository
public interface CandidateRepository extends JpaRepository<Candidate,Integer>{

}
