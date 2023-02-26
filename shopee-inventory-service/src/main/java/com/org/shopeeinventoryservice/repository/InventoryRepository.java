package com.org.shopeeinventoryservice.repository;

import com.org.shopeeinventoryservice.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findByIdProductIn(List<Long> idProduct);
}
