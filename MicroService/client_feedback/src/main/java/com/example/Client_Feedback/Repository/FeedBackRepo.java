package com.example.Client_Feedback.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Client_Feedback.Entity.FeedBack;


public interface FeedBackRepo extends JpaRepository <FeedBack,Integer> {

}
