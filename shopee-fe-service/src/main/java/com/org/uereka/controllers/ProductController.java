package com.org.uereka.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ProductController {

    @GetMapping(value = "/product")
    public ModelAndView viewProductDetail() {
        System.out.println("Đã vào controller Product");
        ModelAndView model = new ModelAndView("product-detail/detail-product.html");
        return model;
    }
}