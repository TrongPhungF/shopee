#Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim as build

#Information around who maintains the image
MAINTAINER shopee

# Add the application's jar to the container
COPY target/shopee-discovery-server-eureka-service-1.0.jar shopee-discovery-server-eureka-service-1.0.jar

#execute the application
ENTRYPOINT ["java","-jar","/shopee-discovery-server-eureka-service-1.0.jar"]