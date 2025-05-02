package com.shopius.shopius.DTO;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Productos")
public class Producto {
    @Id
    private String id;

    @Field(name = "NOMBRE")
    private String nombre;

    @Field(name = "DESCRIPCION")
    private String descripcion;

    @Field(name = "PRECIO_BASE")
    private double precio_base;
    
    public Producto(String id, String nombre, String descripcion, double precio_base) {
        super();
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio_base = precio_base;
    }
}