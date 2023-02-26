package com.org.shoppeorderservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseProductCheckInventory {
    private String idProduct;
    private boolean isInStock;
}
