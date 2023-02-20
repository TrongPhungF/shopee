package com.org.uereka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class ShopeeUerekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopeeUerekaServerApplication.class, args);
	}

}