package com.org.shopeefeservice.controllers;

import com.org.shopeefeservice.dtos.OrderDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class PaymentController {

    @PostMapping(value = "/payment")
    public ModelAndView viewProductDetail(@RequestBody ArrayList<OrderDTO> orderDTOtList) {
        System.out.println("Đã vào controller Payment");
        for (OrderDTO orderDTO : orderDTOtList) {
            System.out.println(orderDTO.getId());
            System.out.println(orderDTO.getPrice());
            System.out.println(orderDTO.getQuantity());
            System.out.println(orderDTO.getTotal());
        }

        ModelAndView model = new ModelAndView("login/login.html");
        return model;
    }
}