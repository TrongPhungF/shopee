package com.org.shopeeproductservice.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.org.shopeeproductservice.converter.ProductConvert;
import com.org.shopeeproductservice.dtos.ProductDTO;
import com.org.shopeeproductservice.entities.Product;
import com.org.shopeeproductservice.repository.ProductRepository;
import com.org.shopeeproductservice.service.ProductService;

@Service
public class ProductImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ProductConvert productConvert;
	
	@Override
	public ProductDTO findById(Integer id)  {
		Optional<Product> productOpt = productRepository.findById(id);
		try {
			if(productOpt.isEmpty()) {
				throw new Exception("Product not found");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
			return productConvert.toDTO(productOpt.get());
		
	}

	@Override
	public List<ProductDTO> findAll() {
		List<ProductDTO> products = productRepository.findAll().stream().map(p -> productConvert.toDTO(p))
				.collect(Collectors.toList());
		return products;
	}


	@Override
	public ProductDTO save(ProductDTO productDTO) {
		Product product = productConvert.toEntity(productDTO);
		return productConvert.toDTO(productRepository.save(product));

	}

	@Override
	public ProductDTO update(ProductDTO productDTO) {
		Optional<Product> productOpt = productRepository.findById(productDTO.getId());		
		try {
			if(productOpt.isEmpty()) {
				throw new Exception("Product not found");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		productConvert.mapDataForUpdate(productOpt.get(), productDTO);

		return productConvert.toDTO(productRepository.save(productOpt.get()));
	}

	@Override
	public void delete(Integer id) {
		productRepository.deleteById(id);
	}

}
