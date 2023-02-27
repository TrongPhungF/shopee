package com.org.shopeefeservice.controllers;

import com.org.shopeefeservice.dtos.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;

@Controller
public class PaymentController {

    @Autowired
    private RestTemplate restTemplate;

    @PostMapping(value = "/payment")
    public ModelAndView viewProductDetail(@RequestBody ArrayList<OrderDTO> orderDTOtList) {
        System.out.println("Đã vào controller Payment");


        for (OrderDTO orderDTO : orderDTOtList) {
            System.out.println(orderDTO.getIdProduct());
            System.out.println(orderDTO.getPrice());
            System.out.println(orderDTO.getQuantity());

        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<ArrayList<OrderDTO>> request = new HttpEntity<>(orderDTOtList, headers);
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:8600/api/v1/orders", request, String.class);

        ModelAndView model = new ModelAndView("login/login.html");
        return model;
    }
}