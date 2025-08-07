package com.example.app.website;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DynamicPage {
    @Value("${spring.application.name}")
    String appName;

    @Value("${spring.thymeleaf.prefix}")
    String thymeleafPrefix;

    @GetMapping("/")       
    public String mainPage(Model model) {
        model.addAttribute("appName", appName);
        System.out.println(thymeleafPrefix);
        return "home";
    }
}
