package com.org.shopeefe.controllers;

import com.org.shopeefe.dtos.ProductDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ProductController {

    @GetMapping(value = "/product")
    public ModelAndView viewProductDetail(@RequestParam("id") Integer id) {
        System.out.println("Đã vào controller Product");

        ProductDTO productDTO6 = new ProductDTO();
        productDTO6.setId(6);
        productDTO6.setName("Đầm");
        productDTO6.setPrice(700000.0);
        productDTO6.setQuantity(100);
        productDTO6.setUrlImg("https://cf.shopee.vn/file/4cb7898954c4dc291ef1ad30d820225e");
        productDTO6.setDesc("Đầm công chúa");

//        ProductCustomize productCustomize = new ProductCustomize();
//        productCustomize.setId(productDTO6.getId());
//        productCustomize.setQuantity(1);
        ModelAndView model = new ModelAndView("product-detail/detail-product.html");
        model.addObject("product",productDTO6);
       // model.addObject("productCustomize",productCustomize);
        return model;
    }
}