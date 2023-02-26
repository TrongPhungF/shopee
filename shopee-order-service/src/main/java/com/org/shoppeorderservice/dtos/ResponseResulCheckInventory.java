package com.org.shoppeorderservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseResulCheckInventory {
    private String orderNumber;
    private List<ProductResponse> productResponses;
}
