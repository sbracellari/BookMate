package edu.project.bookmate.model;

import lombok.Data;

import org.springframework.jdbc.core.RowMapper;

@Data
public class Purchase{
  private int ID;
  private double price;
  private Book book;
  private Student lister;
  private Student recipient;

  public static RowMapper<Purchase> mapper =
    (rs, rowNum) -> {
     Purchase purchase = new Purchase();
        purchase.setID(rs.getInt("id"));
        purchase.setPrice(rs.getDouble("price"));
        purchase.setBook(
          new Book(
            rs.getInt("id"),
            rs.getString("genre"),
            rs.getString("title"),
            rs.getString("author"),
            rs.getString("isbn"),
            rs.getString("description"))
        );
        purchase.setLister(
          new Student(
            rs.getString("lister_first_name"), 
            rs.getString("lister_last_name"), 
            rs.getString("lister_email"))
        );
        purchase.setRecipient(
          new Student(
            rs.getString("recipient_first_name"), 
            rs.getString("recipient_last_name"), 
            rs.getString("recipient_email"))
        );
      return purchase;
  };
}