package com.org.shopeeproductservice.service;

import java.util.List;

import com.org.shopeeproductservice.dtos.ProductDTO;

public interface ProductService {

	ProductDTO findById(Integer id);

	List<ProductDTO> findAll();

	ProductDTO save(ProductDTO productDTO);

	void delete(Integer id);

	ProductDTO update(ProductDTO productDTO);

}
