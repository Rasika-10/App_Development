package com.example.Client_Feedback.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Client_Feedback.Entity.FeedBack;
import com.example.Client_Feedback.Repository.FeedBackRepo;

@Service
public class FeedBackService {
	
	@Autowired
	  private FeedBackRepo repo;
	  
	  public FeedBack addFeedback(FeedBack feedback) {
			return repo.save(feedback);
		}

}
