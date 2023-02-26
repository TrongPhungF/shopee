package com.org.shoppeorderservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponseResult {
    private Long idProduct;
    private boolean isInStock;
}
