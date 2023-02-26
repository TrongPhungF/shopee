package com.org.shopeeinventoryservice.service;

import com.org.shopeeinventoryservice.dto.InventoryRequest;
import com.org.shopeeinventoryservice.dto.InventoryResponse;
import org.springframework.stereotype.Service;

@Service
public interface MessageService {
    void receiveMessage(InventoryRequest inventoryRequest);
    void sendMessage(InventoryResponse inventoryResponse);
}
