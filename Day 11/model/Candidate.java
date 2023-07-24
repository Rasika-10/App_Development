package com.example.demo.model;





import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Candidate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private  String regno;
	private String name;
	private String position;
	private String partyname;

}
