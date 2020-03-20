package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Trade{
  private Book traderBook;
  private Book tradeeBook;
  private Student trader;
  private Student tradee;

  public static RowMapper<Trade> mapper =
    (rs, rowNum) -> {
      Trade trade = new Trade();
        trade.setTraderBook(
          new Book(
            rs.getInt("id"),
            rs.getString("genre"),
            rs.getString("title"),
            rs.getString("author"),
            rs.getString("isbn"),
            rs.getString("description"))
        );
        trade.setTradeeBook(
          new Book(
            rs.getInt("id"),
            rs.getString("genre"),
            rs.getString("title"),
            rs.getString("author"),
            rs.getString("isbn"),
            rs.getString("description"))
        );
        trade.setTrader(
          new Student(
            rs.getString("lister_first_name"), 
            rs.getString("lister_last_name"), 
            rs.getString("lister_email"))
        );
        trade.setTradee(
          new Student(
            rs.getString("recipient_first_name"), 
            rs.getString("recipient_last_name"), 
            rs.getString("recipient_email"))
        );
      return trade;
  };
}