package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Trade {
  public int id;
  private Book traderBook;
  private Student trader;
  
  public static RowMapper<Trade> mapper =
    (rs, rowNum) -> {
      Trade trade = new Trade();
        trade.setId(rs.getInt("trade_id"));
        trade.setTrader(
          new Student(
            rs.getString("student_lister_email"), 
            rs.getString("student_password"),
            rs.getString("student_fname"), 
            rs.getString("student_lname"))
        );
        trade.setTraderBook(
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