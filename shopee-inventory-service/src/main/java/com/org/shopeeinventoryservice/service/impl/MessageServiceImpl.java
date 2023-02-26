package com.org.shopeeinventoryservice.service.impl;

import com.org.shopeeinventoryservice.dto.InventoryRequest;
import com.org.shopeeinventoryservice.dto.InventoryResponse;
import com.org.shopeeinventoryservice.dto.ProductResponse;
import com.org.shopeeinventoryservice.service.InventoryService;
import com.org.shopeeinventoryservice.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService{

    private final InventoryService inventoryService;

    private final RabbitTemplate rabbitTemplate;

    private final Queue queue;

    @RabbitListener(queues = "${spring.rabbitmq.queue.name}")
    @Override
    public void receiveMessage(InventoryRequest inventoryRequests) {
        System.out.println("MessageServiceImpl | receiveMessage is started");
        System.out.println(inventoryRequests);
        List<ProductResponse> inventoryResponses = inventoryService.isInStock(inventoryRequests.getResponseResulCheckInventory());
        InventoryResponse inventoryResponse = new InventoryResponse();
        inventoryResponse.setOrderNumber(inventoryRequests.getOrderNumber());
        inventoryResponse.setProductResponses(inventoryResponses);
        System.out.println(inventoryResponses);
        this.sendMessage(inventoryResponse);
    }

    @Override
    public void sendMessage(InventoryResponse inventoryResponse){
        rabbitTemplate.convertAndSend(queue.getName(), inventoryResponse);
    }


}
