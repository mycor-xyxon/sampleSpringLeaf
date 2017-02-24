// package com.hellokoding.springboot;
package edu.self;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class indexController {
    @RequestMapping("/")
    public String hello(Model model, @RequestParam(value="name", required=false, defaultValue="index") String name) {
        model.addAttribute("index", name);
        return "index";
    }
}
