package com.api_react.api_rest.controller;

import com.api_react.api_rest.entities.Product;
import com.api_react.api_rest.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    //get
    @GetMapping
    public List<Product> getAllProductController(){
        return productService.getAllProducts();
    }

    //get_id
    @GetMapping("/{id}")
    public Optional<Product> getProductByIdController(@PathVariable Long id){
        return productService.getProductById(id);
    }

    //post
    @PostMapping
    public Product postProductController(@RequestBody Product product){
        return productService.createProduct(product);
    }

    //update
    @PutMapping("/{id}")
    public Product updateProductController(@RequestBody Product product, @PathVariable Long id) {
        return productService.updateProduct(product, id);
    }

    @DeleteMapping("/{id}")
    public void deleteProductByIdController(@PathVariable Long id){
        productService.deleteProduct(id);
    }

}
