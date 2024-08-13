package com.example.demo.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ProductException;
import com.example.demo.modal.Product;
import com.example.demo.service.ProductService;
import com.example.demo.user.domain.ProductSubCategory;

@RestController
@RequestMapping("/api")
public class UserProductController {
	
	private ProductService productService;
	
	public UserProductController(ProductService productService) {
		this.productService=productService;
	}
	
	@GetMapping("/products/categories/{category1}/{category2}/{category3}")
    public ResponseEntity<List<Product>> findProductsByCategories(
            @PathVariable String category1,
            @PathVariable String category2,
            @PathVariable String category3) {

        List<Product> products = productService.findProductsByCategories(category1, category2, category3);

        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Return 204 No Content if no products found
        }

        return new ResponseEntity<>(products, HttpStatus.OK);
    }
	
	@GetMapping("/products")
	public ResponseEntity<Page<Product>> findProductByCategoryHandler(
	        @RequestParam String category,
	        @RequestParam List<String> color,
	        @RequestParam Integer minPrice,
	        @RequestParam Integer maxPrice,
	        @RequestParam Integer minDiscount,
	        @RequestParam String sort,
	        @RequestParam String stock,
	        @RequestParam Integer pageNumber,
	        @RequestParam Integer pageSize) {

	    // Call a ProductService method to fetch products based on the provided parameters
	    Page<Product> res = productService.getAllProduct(
	            category, color, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize);

	    

	    
	    return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
	}

	

	
	@GetMapping("/products/id/{productId}")
	public ResponseEntity<Product> findProductByIdHandler(@PathVariable Long productId) throws ProductException{
		
		Product product=productService.findProductById(productId);
		
		return new ResponseEntity<Product>(product,HttpStatus.ACCEPTED);
	}

	@GetMapping("/products/search")
	public ResponseEntity<List<Product>> searchProductHandler(@RequestParam String q){
		
		List<Product> products=productService.searchProduct(q);
		
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
}
