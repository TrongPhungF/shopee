package com.org.shoppeorderservice.service.impl;

import com.org.shoppeorderservice.dtos.RequestProductCheckInventory;
import com.org.shoppeorderservice.dtos.ResponseResulCheckInventory;
import com.org.shoppeorderservice.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final Queue queue;
    private final RabbitTemplate rabbitTemplate;

    @Override
    public void checkProductIsInventory(RequestProductCheckInventory requestProductCheckInventory){
        rabbitTemplate.convertAndSend(queue.getName(), requestProductCheckInventory);




//        rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {
//            if (ack) {
//                // handle successful confirmation
//                rabbitTemplate.convertAndSend(queue.getName(), RequestProductCheckInventory);
//            } else {
//                // handle failed confirmation
//                System.out.println("message gửi thất bại : " + cause);
//            }
//        });
//        rabbitTemplate.setMandatory(true);

    }
    @RabbitListener(queues = "${spring.rabbitmq.queue.name}")
    @Override
    public void receiveMessageInventory(ResponseResulCheckInventory responseResulCheckInventory) {
                System.out.println("message nhận thành công : " + responseResulCheckInventory);
    }

    ;



}
