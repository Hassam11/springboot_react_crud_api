package com.api_react.api_rest.services;

import com.api_react.api_rest.entities.Product;
import com.api_react.api_rest.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class ProductService{

    @Autowired
    private ProductRepository productRepository;

    //get all products
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    //get product by id
    public Optional<Product> getProductById(Long id){
        return productRepository.findById(id);
    }

    //create product
    public Product createProduct(Product product){
        product.setCreationDate(new Date());
        return productRepository.save(product);
    }

    //update product
    public Product updateProduct(Product updatedProduct, Long id) {
        Optional<Product> optionalProduct = productRepository.findById(id);

        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            // Actualizar los campos relevantes con los nuevos valores
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setUrl_image(updatedProduct.getUrl_image());
            existingProduct.setStock(updatedProduct.getStock());
            existingProduct.setPrice(updatedProduct.getPrice());

            existingProduct.setUpdateDate(new Date());

            return productRepository.save(existingProduct);
        } else {
            return null;
        }
    }

    //delete product
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }


//    public Product updateProduct(Product product, Long id){
//        Optional<Product> optionalProduct = productRepository.findById(id);
//
//
//    }



}
