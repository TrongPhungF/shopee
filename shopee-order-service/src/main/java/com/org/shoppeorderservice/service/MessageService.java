package com.org.shoppeorderservice.service;

import com.org.shoppeorderservice.dtos.RequestProductCheckInventory;
import com.org.shoppeorderservice.dtos.ResponseResulCheckInventory;

public interface MessageService {

    void checkProductIsInventory(RequestProductCheckInventory RequestProductCheckInventory);
    void receiveMessageInventory(ResponseResulCheckInventory ResponseResulCheckInventory);
}
