package com.org.userservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;




@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User extends IdBasedEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column (name="phone_number")
	private String phoneNumber;

	@Column (name="email")
	private String email;

	@Column (name="role")
	private String role;

	@Column(name = "created_date")
	private LocalDateTime createdDate;

}
