package com.org.shopeegatewayservice.config;

import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.Mono;

@Configuration
public class RedisConfig {
    //Nếu không có phương thức này, RateLimiter sẽ chặn luôn truy cập.
    @Bean
    public KeyResolver userKeyResolver() {
        return exchange -> Mono.just("1");
    }
}
