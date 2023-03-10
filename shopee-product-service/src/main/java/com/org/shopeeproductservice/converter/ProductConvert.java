package com.org.shopeeproductservice.converter;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.org.shopeeproductservice.dtos.ProductDTO;
import com.org.shopeeproductservice.model.Product;


@Component
public class ProductConvert {

	@Autowired
	private ModelMapper modelMapper;


	public Product toEntity(ProductDTO productDTO) {
				
		return modelMapper.map(productDTO, Product.class);
	}
	
	public ProductDTO toDTO(Product product) {
		return modelMapper.map(product, ProductDTO.class);
	}

	public void mapDataForUpdate(Product product, ProductDTO productDTO) {
		
		if(productDTO.getName() !=null) {
			product.setName(productDTO.getName());
		}	
		if(productDTO.getPrice() !=null) {
			product.setPrice(productDTO.getPrice());
		}	
		if(productDTO.getQuantity() !=null) {
			product.setQuantity(productDTO.getQuantity());
		}	
		if(productDTO.getDesc() !=null) {
			product.setDesc(productDTO.getDesc());
		}	
		if(productDTO.getUrlImg() !=null) {
			product.setUrlImg(productDTO.getUrlImg());
		}	
		
	}

}
