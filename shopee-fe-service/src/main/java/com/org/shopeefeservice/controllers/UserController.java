package com.org.shopeefeservice.controllers;

import com.org.shopeefe.dtos.UserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;


@Controller
public class UserController {

    @GetMapping(value = "/")
    public ModelAndView viewDashboard() {
        System.out.println("Đã vào controller");

        ModelAndView model = new ModelAndView("login/login.html");
        UserDTO userDTO = new UserDTO();
        model.addObject("user",userDTO);
        return model;
    }

    @PostMapping(value = "/login")
    public RedirectView  doLogin(@ModelAttribute("user") UserDTO userDTO) {
        System.out.println("Login Sucess: " + userDTO.getUserName() + userDTO.getPassword());

        return new RedirectView("/home");
    }
}
