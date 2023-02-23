package com.org.shopeefe.controllers;

import com.org.shopeefe.dtos.ProductDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;
import java.util.List;
@Controller
public class PaymentController {

    @PostMapping(value = "/payment")
    public ModelAndView viewProductDetail(@RequestBody Map<String, String> cart) {
        System.out.println("Đã vào controller Payment");

        for (Map.Entry<String, String> entry : cart.entrySet()) {
            System.out.println("Id: " + entry.getKey() + ", Quantity: " + entry.getValue());
        }

        ModelAndView model = new ModelAndView("login/login.html");
        return model;
    }
}