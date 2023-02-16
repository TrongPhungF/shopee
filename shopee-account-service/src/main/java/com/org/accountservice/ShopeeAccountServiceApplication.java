package com.org.accountservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.org.accountservice.entities.User;
import com.org.accountservice.repositories.UserRepository;

@SpringBootApplication
@EnableJpaAuditing
public class ShopeeAccountServiceApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
    public static void main(String[] args) {
        SpringApplication.run(ShopeeAccountServiceApplication.class, args);
    }

	@Override
	public void run(String... args) throws Exception {
		
		// Insert vào csdl một user.
//		User user = new User();
//		user.setUserName("admin");
//		user.setPassword(passwordEncoder.encode("admin"));
//		userRepository.save(user);

	}

}
