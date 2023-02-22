package com.org.shopeefe.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {


    private Integer id;

    private String name;

    private String desc;

    private Integer quantity;

    private Double price;

    private String urlImg;

}
