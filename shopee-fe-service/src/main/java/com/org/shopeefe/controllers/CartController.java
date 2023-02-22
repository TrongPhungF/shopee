package com.org.shopeefe.controllers;

import com.org.shopeefe.dtos.ProductDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CartController {
    @GetMapping(value = "/cart")
    public ModelAndView viewDashboard() {

        System.out.println("Đã vào controller"+ 2);

        ProductDTO productDTO6 = new ProductDTO();
        productDTO6.setId(6);
        productDTO6.setName("Đầm");
        productDTO6.setPrice(700000.0);
        productDTO6.setQuantity(100);
        productDTO6.setUrlImg("https://cf.shopee.vn/file/4cb7898954c4dc291ef1ad30d820225e");
        productDTO6.setDesc("Đầm công chúa");

        ModelAndView  model = new ModelAndView("cart/cart.html");
        model.addObject("product", productDTO6);
        return model;
    }

    @PostMapping (value = "/cart")
    public ModelAndView viewDashboardPost(@ModelAttribute("productDTO") ProductDTO productDTO) {


        ModelAndView  model = new ModelAndView("cart/cart.html");
          model.addObject("product", productDTO);
        return model;
    }
}
