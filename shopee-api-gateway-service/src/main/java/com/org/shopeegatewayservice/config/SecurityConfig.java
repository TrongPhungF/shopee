package com.org.shopeegatewayservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import reactor.core.publisher.Mono;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity serverHttpSecurity) {
        serverHttpSecurity.csrf().disable();
        serverHttpSecurity.exceptionHandling()
                .authenticationEntryPoint((swe, e) -> {
                    return Mono.fromRunnable(() -> {
                        swe.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                    });
                }).accessDeniedHandler((swe, e) -> {
                    return Mono.fromRunnable(() -> {
                        swe.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
                    });
                });
        serverHttpSecurity.authorizeExchange(exchange -> {
//            exchange.anyExchange().authenticated();
//            exchange.anyExchange().permitAll();
            exchange.pathMatchers("/api/v1/auth/**").permitAll();
            exchange.pathMatchers("/api/v1/users/**").permitAll();
            exchange.pathMatchers("/api/v1/admin/**").permitAll();
            exchange.pathMatchers("/api/v1/products/**").permitAll();
            exchange.pathMatchers("/api/v1/orders/**").permitAll();
            exchange.pathMatchers("/api/v1/inventories/**").permitAll();
        }
        );
                //.oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::jwt);

        serverHttpSecurity.csrf().disable();
        return serverHttpSecurity.build();
    }
}
