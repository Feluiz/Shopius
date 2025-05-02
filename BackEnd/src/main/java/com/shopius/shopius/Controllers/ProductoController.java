package com.shopius.shopius.Controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.shopius.shopius.DAO.ProductoRep;
import com.shopius.shopius.DTO.Producto;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ProductoController {
    
    @Autowired
    private ProductoRep productoRep;

    public static class StringResponse {
        private String message;

        public StringResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }

    @GetMapping("/productoss")
    public List<Producto> getAllProductoss() {
        return productoRep.findByNombre("Café Arábica Orgánico (250g)");
    }

    @GetMapping("/productos")
    public List<Producto> getAllProductos() {
        return Arrays.asList(
            new Producto("1", "Hola", "Hola", 16.11),
            new Producto("2", "Hola", "Hola", 16.11)
        );
    }

    @GetMapping("/hola")
    public StringResponse getHola() {
        return new StringResponse("Hello, World!");
    }
}
