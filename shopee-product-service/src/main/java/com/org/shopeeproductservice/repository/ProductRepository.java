package com.org.shopeeproductservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.org.shopeeproductservice.model.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
