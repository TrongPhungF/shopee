package com.org.shoppeorderservice.service.impl;

import com.org.shoppeorderservice.dtos.RequestProductCheckInventory;
import com.org.shoppeorderservice.dtos.ResponseResulCheckInventory;
import com.org.shoppeorderservice.service.MessageService;
import com.org.shoppeorderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log4j2
public class MessageServiceImpl implements MessageService {

    private Queue queue;
    private RabbitTemplate rabbitTemplate;

    private OrderService orderService;

    @Autowired
    public MessageServiceImpl(Queue queue, RabbitTemplate rabbitTemplate, OrderService orderService) {
        this.queue = queue;
        this.rabbitTemplate = rabbitTemplate;
        this.orderService = orderService;
    }

    @Override
    public void checkProductIsInventory(RequestProductCheckInventory requestProductCheckInventory) {
        rabbitTemplate.convertAndSend("shopee-queue-inventories", requestProductCheckInventory);

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
        log.info("message nhận thành công : " + responseResulCheckInventory);
        boolean check = false;
        if (responseResulCheckInventory.getProductResponses().size() == 0) {
            log.info("Đơn hàng không thể được xử lý");
        } else {
            for (int i = 0; i < responseResulCheckInventory.getProductResponses().size(); i++) {
                if (responseResulCheckInventory.getProductResponses().get(i).isInStock()) {
                    log.info("Sản phẩm " + responseResulCheckInventory.getProductResponses().get(i).getIdProduct() + "có trong kho");

                } else {
                    check = true;
                    System.out.println("Sản phẩm " + responseResulCheckInventory.getProductResponses().get(i).getIdProduct() + "  không có trong kho");
                }
            }
            if (check == true) {
                log.info("Đơn hàng không thể được xử lý");
            } else {
                log.info("Đơn hàng có thể được xử lý");
                orderService.updateOrderStatus(responseResulCheckInventory.getOrderNumber(), "APPROVED");
            }
        }
    }

}

