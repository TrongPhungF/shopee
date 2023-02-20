package com.org.uereka.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class AccountController {
	
	@GetMapping(value = "/")
	public ModelAndView viewDashboard() {
		System.out.println("Đã vào controller");
	    ModelAndView model = new ModelAndView("login/login.html");
	    return model;
	}
}
