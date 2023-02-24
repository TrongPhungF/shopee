package com.org.shopeeproductservice.controller;

import com.org.shopeeproductservice.dtos.ProductDTO;
import com.org.shopeeproductservice.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

	private final ProductService productService;

	@GetMapping(  "/hello")
	public String test() {
		return "Hello World";
	}

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
