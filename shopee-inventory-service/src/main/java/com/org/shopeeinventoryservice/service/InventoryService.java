package com.org.shopeeinventoryservice.service;

import com.org.shopeeinventoryservice.dto.ProductCheckInventory;
import com.org.shopeeinventoryservice.dto.ProductResponse;

import java.util.List;


public interface InventoryService {
    List<ProductResponse> isInStock(List<ProductCheckInventory> productCheckInventories);
}
