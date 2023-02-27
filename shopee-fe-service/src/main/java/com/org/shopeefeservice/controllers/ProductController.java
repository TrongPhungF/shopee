package com.org.shopeefeservice.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.org.shopeefeservice.dtos.ProductDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ProductController {

    @GetMapping(value = "/product")
    public ModelAndView viewProductDetail(@RequestParam("id") Integer id, ModelAndView model) {
        System.out.println("Đã vào controller Product");

        String url = "http://localhost:8600/api/v1/products/"+id;

        try {
            HttpResponse<JsonNode> jsonResponse = Unirest.get(url)
                    .header("accept", "application/json")
                    .asJson();

            int statusCode = jsonResponse.getStatus();
            JsonNode responseBody = jsonResponse.getBody();

            ObjectMapper objectMapper = new ObjectMapper();
            ProductDTO product = objectMapper.readValue(responseBody.toString(), ProductDTO.class);

            model = new ModelAndView("product-detail/detail-product.html");
            model.addObject("product",product);

            System.out.println("Status code: " + statusCode);
            System.out.println("Response body: " + responseBody.toString());
        } catch (UnirestException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }


        return model;
    }
}