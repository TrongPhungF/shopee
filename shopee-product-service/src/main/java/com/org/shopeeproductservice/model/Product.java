package com.org.shopeeproductservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "products")
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
	private Integer quantity;

	@Column(name = "product_price")
	private Double price;

	@Column(name = "product_url", nullable = false)
	private String urlImg;

}
