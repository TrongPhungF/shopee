package com.org.shopeegatewayservice.filter;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.UUID;

@Component
@RequiredArgsConstructor
@Log4j2
public class TrackingFilter implements GlobalFilter {


    private final  FilterUtils filterUtils;

    @Override
    // Code that executes everytime when a request passes through filter
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        HttpHeaders requestHeader = exchange.getRequest().getHeaders(); // HTTP header from request

        if (isCorrelationIdPresent(requestHeader)){
            log.info("API Gateway | TrackingFilter | filter | correlation_id found in trackingfilter: {}",filterUtils.getCorrelationId(requestHeader));
        }else{
            String correlationId =  generateCorrelationId(); // if correlation_id not found in header, generate one
            exchange = filterUtils.setCorrelationId(exchange,correlationId);
            log.info("API Gateway | TrackingFilter | filter | correlation_id generated in tracking filter: {}",correlationId);
        }
        return chain.filter(exchange);
    }


    private boolean isCorrelationIdPresent(HttpHeaders header){
        return filterUtils.getCorrelationId(header) != null;
    }

    private String generateCorrelationId() {
        return UUID.randomUUID().toString();
    }
}
