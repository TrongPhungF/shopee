package com.org.shoppeorderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ShoppeOrderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppeOrderServiceApplication.class, args);
	}

}
