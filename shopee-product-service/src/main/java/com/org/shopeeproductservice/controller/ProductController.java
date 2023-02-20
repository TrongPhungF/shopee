package com.org.shopeeproductservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.org.shopeeproductservice.dtos.ProductDTO;
import com.org.shopeeproductservice.service.ProductService;

@RestController
@RequestMapping(value = "/api/v1/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/{id}")
	public ProductDTO findById(@PathVariable("id") Integer id) {

		return productService.findById(id);
	}

	@GetMapping
	public List<ProductDTO> findAll() {
		return productService.findAll();
	}

	@PostMapping
	public ProductDTO save(@RequestBody ProductDTO productDTO) {
		return productService.save(productDTO);
	}

	@DeleteMapping
	public String delete(@RequestParam("id") Integer id) {
		productService.delete(id);
		return "Success!";
	}
	
	@PatchMapping
	public ProductDTO update(@RequestBody ProductDTO productDTO) {	
		return productService.update(productDTO);
	}

}
