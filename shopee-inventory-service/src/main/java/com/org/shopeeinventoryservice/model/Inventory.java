package com.org.shopeeinventoryservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name = "inventories")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Inventory extends IdBasedEntity implements Serializable{

    private static final long serialVersionUID = 1L;
    private Long idProduct;
    private Long quantity;

}



