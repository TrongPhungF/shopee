
package com.org.discoveryservereureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class ShopeeDiscoveryServerEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopeeDiscoveryServerEurekaApplication.class, args);
	}

}
