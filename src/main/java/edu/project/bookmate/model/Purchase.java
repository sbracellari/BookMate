package edu.project.bookmate.model;

import lombok.Data;

import org.springframework.jdbc.core.RowMapper;

@Data
public class Purchase{
  private int Id;
  private double price;
  private Book book;
  private Student lister;

 public static RowMapper<Purchase> mapper =
    (rs, rowNum) -> {
      Purchase purchase = new Purchase();
        purchase.setId(rs.getInt("purchase_id"));
        purchase.setPrice(rs.getDouble("purchase_price"));
        purchase.setLister(
          new Student(
            rs.getString("student_lister_email"), 
            rs.getString("student_password"),
            rs.getString("student_fname"), 
            rs.getString("student_lname"))
        );
        purchase.setBook(
          new Book(
            rs.getInt("book_id"),
            rs.getString("book_isbn"),
            rs.getString("book_author"),
            rs.getString("book_title"),
            rs.getString("book_genre"),
            rs.getString("book_desc"))
        );
      return purchase;
  }; 
}