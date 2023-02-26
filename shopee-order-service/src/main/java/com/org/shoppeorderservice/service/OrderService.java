package com.org.shoppeorderservice.service;


import com.org.shoppeorderservice.dtos.OrderRequest;

import java.util.List;

public interface OrderService {

    void placeOrder(List<OrderRequest> orderRequest);
    void updateOrderStatus(String orderNumber, String status);
}
