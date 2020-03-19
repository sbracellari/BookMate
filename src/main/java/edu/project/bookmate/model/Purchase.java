package edu.project.bookmate.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import org.springframework.jdbc.core.RowMapper;

@Data
@EqualsAndHashCode(callSuper = false)
public class Purchase{
  private int ID;
  private double price;
  private int bookID;
  private String listerEmail;
  private String recipientEmail;

  public Purchase(int ID, double price, int bookID, String listerEmail, String recipientEmail) {
    this.ID = ID;
    this.price = price;
    this.bookID = bookID;
    this.listerEmail = listerEmail;
    this.recipientEmail = recipientEmail;
  }

  public static RowMapper<Purchase> mapper = 
    (rs, rowNum) -> {
      Purchase purchase = 
        new Purchase(
          rs.getint("ID"),
          rs.getDouble("price"),
          rs.getint("bookID"),
          rs.getString("listerEmail"),
          rs.getString("recipientEmail")
        );
      return purchase;
    };
}