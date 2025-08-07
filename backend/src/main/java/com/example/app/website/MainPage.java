package com.example.app.website;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class MainPage {
    @GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

    @GetMapping("/strona_stacha")
        public String adder(
          @RequestParam(value = "number1", defaultValue = "3") int number1,
          @RequestParam(value = "number2", defaultValue = "7") int number2
        ){
		double output_nr = 1.3212412251 * number1 + 1.000421521 * number2;
		return String.format("Hello Is %f your favourite number? Don't asnwer, I know it is", output_nr);
        }
}
