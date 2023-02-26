package com.org.shopeeinventoryservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/inventories")
@RequiredArgsConstructor
public class InventoryController {


//    private final InventoryService inventoryService;
//
//    @PostMapping("/is-in-stock")
//    @ResponseStatus(HttpStatus.OK)
//    public List<InventoryResponse> isInStock(@RequestBody List<InventoryRequest> inventoryRequests) {
//        return inventoryService.isInStock(inventoryRequests);
//    }

//    private final MessageService messageService;
//    @PostMapping("/check")
//    public void check() {
//        InventoryResponse inventoryResponse = new InventoryResponse();
//        messageService.sendMessage(inventoryResponse);
//    }

}

