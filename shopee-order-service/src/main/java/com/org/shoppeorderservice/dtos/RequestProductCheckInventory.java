package com.org.shoppeorderservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestProductCheckInventory {
  private String orderNumber;
  private List<ProductCheckInventory> responseResulCheckInventory;

}

