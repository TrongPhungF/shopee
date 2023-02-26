package com.org.shoppeorderservice.service.impl;

import com.org.shoppeorderservice.dtos.RequestProductCheckInventory;
import com.org.shoppeorderservice.dtos.ResponseResulCheckInventory;
import com.org.shoppeorderservice.service.MessageService;
import com.org.shoppeorderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

    private  Queue queue;
    private  RabbitTemplate rabbitTemplate;

    private  OrderService orderService;

    @Autowired
    public MessageServiceImpl(Queue queue, RabbitTemplate rabbitTemplate, OrderService orderService) {
        this.queue = queue;
        this.rabbitTemplate = rabbitTemplate;
        this.orderService = orderService;
    }

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
                boolean check = false;
              for (int i = 0; i < responseResulCheckInventory.getProductResponses().size(); i++) {
                  if (responseResulCheckInventory.getProductResponses().get(i).isInStock()) {
                      System.out.println("Sản phẩm "+responseResulCheckInventory.getProductResponses().get(i).getIdProduct()+"có trong kho");

                  } else {
                      check =true;
                      System.out.println("Sản phẩm "+responseResulCheckInventory.getProductResponses().get(i).getIdProduct()+"  không có trong kho");
                  }
              }
              if (check == true){
                  System.out.println("Đơn hàng không thể được xử lý");
                }else {
                  System.out.println("Đơn hàng có thể được xử lý");
                  orderService.updateOrderStatus(responseResulCheckInventory.getOrderNumber(),"APPROVED");
              }


    }

    ;



}
