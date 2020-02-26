package edu.project.bookmate.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import org.springframework.jdbc.core.RowMapper;

@Data
@EqualsAndHashCode(callSuper = false)
public class Purchase extends Transaction {
  private double price;
  
  public Purchase() {}

  public Purchase(double price) {
    this.price = price;
  }

  public static RowMapper<Purchase> mapper = 
    (rs, rowNum) -> {
      Purchase purchase = 
        new Purchase(
          rs.getDouble("price")
        );
      return purchase;
    };
}