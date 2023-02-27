package com.org.shoppeorderservice.config;

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

    public static final String QUEUE_DLQ_EXAMPLE = "q.error-handling-demo.dlx-dlq-example";
    public static final String DL_QUEUE_DLQ_EXAMPLE = "q.error-handling-demo.dlx-dlq-example.dlq";
    public static final String EXCHANGE_DLX_EXAMPLE = "x.error-handling-demo.dlx-dlq-example";
    public static final String DL_EXCHANGE_DLX_EXAMPLE = "x.error-handling-demo.dlx-dlq-example.dlx";
    public static final String DL_ROUTING_KEY_ORIGINAL = "dlx-before";
    public static final String DL_ROUTING_KEY_DLQ_OVERRIDDEN = "dlx-after";

    @Bean
    public Queue queue() {
        return new Queue(queueName, true);
    }

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
