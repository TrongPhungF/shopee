package com.org.shopeeinventoryservice.service.impl;

import com.org.shopeeinventoryservice.dto.ProductCheckInventory;
import com.org.shopeeinventoryservice.dto.ProductResponse;
import com.org.shopeeinventoryservice.repository.InventoryRepository;
import com.org.shopeeinventoryservice.service.InventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Log4j2
@Service
public class InventoryServiceImpl implements InventoryService {

    private final InventoryRepository inventoryRepository;

    @Override
    public List<ProductResponse> isInStock(List<ProductCheckInventory> productCheckInventories) {
        // List<String> skuCode = inventoryRequests.stream().map(InventoryRequest::getSkuCode).toList();
        log.info("Checking Inventory");
        return inventoryRepository.findByIdProductIn(productCheckInventories.stream().map(ProductCheckInventory::getIdProduct).toList()).stream()
                .map(inventory ->
                        ProductResponse.builder()
                                .idProduct(inventory.getIdProduct())
                                .isInStock(inventory.getQuantity() >=
                                        productCheckInventories.stream().filter(
                                                inventoryRequest ->
                                                        inventoryRequest.getIdProduct().equals(inventory.getIdProduct())).findFirst().get().getQuantity())
                                .build()
                ).toList();
    }
}
