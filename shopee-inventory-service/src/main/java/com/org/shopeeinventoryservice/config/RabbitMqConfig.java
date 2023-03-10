package com.org.shopeeinventoryservice.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqConfig {
    @Value("${spring.rabbitmq.queue.name}")
    private String queueName;

    @Value("${spring.rabbitmq.template.exchange}")
    private String topicExchangeName;

    @Value("${spring.rabbitmq.template.routing-key}")
    private String routingName;

    @Value("${spring.rabbitmq.host}")
    private String connectFactoryName;

    @Value("${spring.rabbitmq.port}")
    private int rabbitMQPort;

    @Value("${spring.rabbitmq.username}")
    private String rabbitMQUsername;

    @Value("${spring.rabbitmq.password}")
    private String rabbitMQPassword;

    @Bean
    public Queue queue() {
        return new Queue(queueName, true);
    }

//    Direct Exchange: định tuyến tin nhắn đến queue dựa trên routing key. Exchange sẽ so sánh routing key của tin nhắn với routing key của hàng đợi để xác định địa chỉ đích của tin nhắn.
//    Fanout Exchange: định tuyến tin nhắn đến tất cả các queue được liên kết với exchange.
//    Topic Exchange: định tuyến tin nhắn đến hàng đợi tương ứng với pattern của routing key.
//    Header Exchange: định tuyến tin nhắn dựa trên các thuộc tính của header.
    @Bean
    DirectExchange directExchange(){
        return new DirectExchange(topicExchangeName);
    }
    @Bean
    Binding binding(Queue queue, DirectExchange directExchange){
        return BindingBuilder.bind(queue).to(directExchange).with(routingName);
    }

    @Bean
    public ConnectionFactory connectionFactory() {
        CachingConnectionFactory cachingConnectionFactory = new CachingConnectionFactory();
        cachingConnectionFactory.setHost(connectFactoryName);
        cachingConnectionFactory.setPort(rabbitMQPort);
        cachingConnectionFactory.setUsername(rabbitMQUsername);
        cachingConnectionFactory.setPassword(rabbitMQPassword);
        cachingConnectionFactory.setChannelCacheSize(10); // số kênh được giữ trong bộ nhớ đệm

        return cachingConnectionFactory;
    }

    @Bean
    public MessageConverter jsonMessageConverter(ObjectMapper objectMapper) {
        return new Jackson2JsonMessageConverter(objectMapper);
    }

    @Bean
    RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(new Jackson2JsonMessageConverter());
        return rabbitTemplate;
    }
}
