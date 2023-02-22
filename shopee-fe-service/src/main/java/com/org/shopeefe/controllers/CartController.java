package com.org.shopeefe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CartController {
    @GetMapping(value = "/cart")
    public ModelAndView viewDashboard(ModelAndView model) {
        System.out.println("Đã vào controller");





        model = new ModelAndView("cart/cart.html");
     //   model.addObject("products", products);
        return model;
    }
}
