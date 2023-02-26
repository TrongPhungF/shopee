package com.org.shoppeorderservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "order_line_items")
public class OrderLineItems extends IdBasedEntity implements Serializable {

    private Long idProduct;
    private Double price;
    private Integer quantity;
}
