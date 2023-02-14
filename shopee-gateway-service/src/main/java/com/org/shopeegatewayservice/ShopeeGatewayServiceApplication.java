package com.org.shopeegatewayservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ShopeeGatewayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopeeGatewayServiceApplication.class, args);
	}

}
