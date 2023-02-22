package com.org.shopeefe.controllers;

import com.org.shopeefe.dtos.ProductDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;


@Controller
public class AccountController {

    @GetMapping(value = "/")
    public ModelAndView viewDashboard() {
        System.out.println("Đã vào controller");

        ModelAndView model = new ModelAndView("login/login.html");
        return model;
    }
}
