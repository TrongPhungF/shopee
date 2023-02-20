package com.org.uereka.controllers;
import com.org.uereka.dtos.Product;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CartController {
	@GetMapping(value = "/cart")
	public ModelAndView viewDashboard(ModelAndView model) {
		System.out.println("Đã vào controller");
		List<Product> products = new ArrayList<>();
		Product p = new Product();
		p.setId(1L);
		p.setName("loc");
		products.add(p);

		 model = new ModelAndView("cart/cart.html");
		model.addObject("products", products);
		return model;
	}
}
