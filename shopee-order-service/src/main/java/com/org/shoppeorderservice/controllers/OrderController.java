package com.org.shoppeorderservice.controllers;

import com.org.shoppeorderservice.dtos.OrderRequest;
import com.org.shoppeorderservice.service.MessageService;
import com.org.shoppeorderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    private final MessageService messageService;
    
    @PostMapping
    public void order(@RequestBody List<OrderRequest> orderRequest) {
        System.out.println("Da vao duoc order");
        for (OrderRequest orderDTO : orderRequest) {
            System.out.println(orderDTO.getIdProduct());
            System.out.println(orderDTO.getPrice());
            System.out.println(orderDTO.getQuantity());
        }
        orderService.placeOrder(orderRequest);


    }
//
//    public CompletableFuture<String> fallbackMethod(OrderRequest orderRequest, RuntimeException runtimeException) {
//        return CompletableFuture.supplyAsync(() -> "Oops! Something went wrong, please order after some time!");
//    }

//        @PostMapping
//        public void send(@RequestBody List<RequestProductCheckInventory> requestProductCheckInventories) {
//             messageService.checkProductIsInventory(requestProductCheckInventories);
//        }

}
