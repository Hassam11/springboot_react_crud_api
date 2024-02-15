package com.api_react.api_rest.repositories;

import com.api_react.api_rest.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

    //Get all
//    List<Product> getAll();
//
//    //Get Product by id
//    Product getProductById(Long id);
//
//    //Create Product
//    Product createProduct(Product product);
//
//    //Update Product
//    Product updateProduct(Product product, Long id);
//
//    //Delete Product y id
//    void delete(Product product);
}
