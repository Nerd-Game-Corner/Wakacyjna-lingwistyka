package com.example.app.website;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173") // Frontend dev server port
@RestController
@RequestMapping("/api")
public class MainPage {
    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello from backend!");
    }
}
