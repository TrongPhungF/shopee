package com.org.shopeeproductservice.entities;

import java.io.Serializable;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer id;

	@Column(name = "product_name")
	private String name;

	@Column(name = "product_desc", nullable = true)
	private String desc;

	@Column(name = "product_quanitity", nullable = true)
	private Integer quanitity;

	@Column(name = "product_price")
	private Double price;

	@Column(name = "product_url", nullable = false)
	private String urlImg;

}
