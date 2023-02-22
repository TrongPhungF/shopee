package com.org.shopeefe.controllers;

import com.org.shopeefe.dtos.ProductDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {

    @GetMapping(value = "/home")
    public ModelAndView viewDashboard() {
        System.out.println("Đã vào controller");

        List<ProductDTO> productDTOS = new ArrayList<>();
        ProductDTO productDTO1 = new ProductDTO();
        productDTO1.setId(1);
        productDTO1.setName("Túi xách");
        productDTO1.setPrice(600000.0);
        productDTO1.setQuantity(10);
        productDTO1.setUrlImg("https://cf.shopee.vn/file/7f185c0f3b0353e65c264d8bea665c60");
        productDTO1.setDesc("Túi xách đẹp");
        ProductDTO productDTO2 = new ProductDTO();
        productDTO2.setId(2);
        productDTO2.setName("Giày");
        productDTO2.setPrice(500000.0);
        productDTO2.setQuantity(20);
        productDTO2.setUrlImg("https://cf.shopee.vn/file/ca7100259e6d2dcb130fb9f226868f1a");
        productDTO2.setDesc("Giày đẹp");
        ProductDTO productDTO3 = new ProductDTO();
        productDTO3.setId(3);
        productDTO3.setName("Áo Croptop");
        productDTO3.setPrice(100000.0);
        productDTO3.setQuantity(20);
        productDTO3.setUrlImg("https://cf.shopee.vn/file/f27d681263f6a2283588582e9a6f91e3");
        productDTO3.setDesc("Áo croptop đẹp");
        ProductDTO productDTO4 = new ProductDTO();
        productDTO4.setId(4);
        productDTO4.setName("Mascara");
        productDTO4.setPrice(200000.0);
        productDTO4.setQuantity(30);
        productDTO4.setUrlImg("https://cf.shopee.vn/file/c8c1ad0927dbb6bf8ef17cf3030d09d1_tn");
        productDTO4.setDesc("Mascara đẹp");
        ProductDTO productDTO5 = new ProductDTO();
        productDTO5.setId(5);
        productDTO5.setName("Serum");
        productDTO5.setPrice(400000.0);
        productDTO5.setQuantity(40);
        productDTO5.setUrlImg("https://cf.shopee.vn/file/c8c1ad0927dbb6bf8ef17cf3030d09d1_tn");
        productDTO5.setDesc("Chăm sóc da");
        ProductDTO productDTO6 = new ProductDTO();
        productDTO6.setId(6);
        productDTO6.setName("Đầm");
        productDTO6.setPrice(700000.0);
        productDTO6.setQuantity(100);
        productDTO6.setUrlImg("https://cf.shopee.vn/file/4cb7898954c4dc291ef1ad30d820225e");
        productDTO6.setDesc("Đầm công chúa");

        productDTOS.add(productDTO1);
        productDTOS.add(productDTO2);
        productDTOS.add(productDTO3);
        productDTOS.add(productDTO4);
        productDTOS.add(productDTO5);
        productDTOS.add(productDTO6);

        ModelAndView model = new ModelAndView("home/home.html");
        model.addObject("products",productDTOS);

        return model;
    }
}
