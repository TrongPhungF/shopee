package com.org.shopeefe.controllers;

import com.org.shopeefe.dtos.ProductDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;


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

        ProductDTO productDTO7 = new ProductDTO();
        productDTO7.setId(7);
        productDTO7.setName("Váy");
        productDTO7.setPrice(700000.0);
        productDTO7.setQuantity(100);
        productDTO7.setUrlImg("https://cf.shopee.vn/file/4cb7898954c4dc291ef1ad30d820225e");
        productDTO7.setDesc("Đầm công chúa");

        List<ProductDTO> products = new ArrayList<>();
        products.add(productDTO6);
        products.add(productDTO7);

        ModelAndView  model = new ModelAndView("cart/cart.html");
        model.addObject("total",productDTO6.getPrice()*productDTO6.getQuantity());
        model.addObject("products", products);
        return model;
    }

    @PostMapping (value = "/cart")
    public ModelAndView viewDashboardPost(@ModelAttribute("productDTO") ProductDTO productDTO) {
        // hàm này sẽ chạy
        List<ProductDTO> products = new ArrayList<>();
        products.add(productDTO);
        ModelAndView  model = new ModelAndView("cart/cart.html");
        model.addObject("total",productDTO.getPrice()*productDTO.getQuantity());
        model.addObject("products", products);

        return model;
    }
}
