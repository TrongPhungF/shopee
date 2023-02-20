package com.org.accountservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableEurekaClient
@SpringBootApplication
public class ShopeeAccountServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopeeAccountServiceApplication.class, args);
    }
}