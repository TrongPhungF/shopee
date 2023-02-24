<<<<<<<< HEAD:shopee-eureka-server-service/src/main/java/com/org/shopeefe/ShopeeUerekaServerApplication.java
package com.org.shopeefe;
========
package com.org.discoveryservereureka;
>>>>>>>> main:shopee-discovery-server-eureka-service/src/main/java/com/org/discoveryservereureka/ShopeeDiscoveryServerEurekaApplication.java

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
