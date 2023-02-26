package com.org.shoppeorderservice.service.impl;

import com.org.shoppeorderservice.dtos.OrderRequest;
import com.org.shoppeorderservice.dtos.ProductCheckInventory;
import com.org.shoppeorderservice.dtos.RequestProductCheckInventory;
import com.org.shoppeorderservice.model.Order;
import com.org.shoppeorderservice.model.OrderLineItems;
import com.org.shoppeorderservice.repository.OrderRepository;
import com.org.shoppeorderservice.service.MessageService;
import com.org.shoppeorderservice.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private  OrderRepository orderRepository;
    private  MessageService messageService;

    @Autowired
   public void OrderServiceImpl(OrderRepository orderRepository, MessageService messageService) {
        this.orderRepository = orderRepository;
        this.messageService = messageService;
    }

    @Override
    public void placeOrder(List<OrderRequest> orderRequest) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        List<OrderLineItems> orderLineItems = new ArrayList<>();

        for (OrderRequest orderRequest1 : orderRequest) {
            OrderLineItems orderLineItems1 = new OrderLineItems();
            orderLineItems1.setIdProduct(orderRequest1.getIdProduct());
            orderLineItems1.setPrice(orderRequest1.getPrice());
            orderLineItems1.setQuantity(orderRequest1.getQuantity());
            orderLineItems.add(orderLineItems1);
        }
        order.setOrderLineItems(orderLineItems);
        order.setOrderStatus("PENDING");
        orderRepository.save(order);

//        RequestProductCheckInventory requestProductCheckInventory = new RequestProductCheckInventory();
//        requestProductCheckInventory.setOrderNumber(order.getOrderNumber());
//
//        requestProductCheckInventory.setResponseResulCheckInventory(
//                orderLineItems.stream().map(
//                orderLineItems1 -> {
//                    ProductCheckInventory productCheckInventory = new ProductCheckInventory();
//                    productCheckInventory.setIdProduct(orderLineItems1.getIdProduct());
//                    productCheckInventory.setQuantity(orderLineItems1.getQuantity());
//                    return productCheckInventory;
//                }
//                ).collect(Collectors.toList()));
//                messageService.checkProductIsInventory(requestProductCheckInventory);


    }

    @Override
    public void updateOrderStatus(String orderNumber, String status) {
        Order order = orderRepository.findByOrderNumber(orderNumber);
        order.setOrderStatus(status);
        orderRepository.save(order);
    }

//    private OrderLineItems mapToDto(OrderLineItemsDto orderLineItemsDto) {
//        OrderLineItems orderLineItems = new OrderLineItems();
//        orderLineItems.setQuantity(orderLineItemsDto.getQuantity());
//        return orderLineItems;
//    }
}
