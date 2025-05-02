package com.shopius.shopius.DAO;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.shopius.shopius.DTO.Producto;

public interface ProductoRep extends MongoRepository<Producto, String> {
    //@Query(fields="{'NOMBRE' : 1, 'DESCRIPCION' : 1, 'PRECIO_BASE': 1}")
	List<Producto> findAll();
    List<Producto> findByNombre(String nombre);
	
	public long count();
}
