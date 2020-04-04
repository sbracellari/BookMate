package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Trade {
  public int id;
  private Book book;
  private Student lister;
  
  public static RowMapper<Trade> mapper =
    (rs, rowNum) -> {
      Trade trade = new Trade();
        trade.setId(rs.getInt("trade_id"));
        trade.setLister(
          new Student(
            rs.getString("student_lister_email"), 
            rs.getString("student_fname"), 
            rs.getString("student_lname"))
        );
        trade.setBook(
          new Book(
            rs.getInt("book_id"),
            rs.getString("book_isbn"),
            rs.getString("book_author"),
            rs.getString("book_title"),
            rs.getString("book_genre"),
            rs.getString("book_desc"))
        );
      return trade;
  };
}