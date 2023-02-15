package com.org.accountservice.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@Entity
@Table(name = "`user`")
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "user_id")
	private Integer id;

	@Column(name = "user_name", nullable = false)
	private String userName;

	@Column(name = "password", nullable = true)
	private String password;

	@Column(name = "full_name", nullable = true)
	private String fullName;

	@Column(name = "phone", nullable = true)
	private String phone;

	@Column(name = "gender", nullable = true)
	private String gender;


}
