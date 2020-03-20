package edu.project.bookmate.model;

import java.sql.Timestamp;
import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Auction {
  private int ID;
  private Timestamp start;
  private Timestamp end;
  private double initialBid;
  private double currentBid; 
  private Book book;
  private Student lister;
  private Student recipient; 

  public static RowMapper<Auction> mapper =
    (rs, rowNum) -> {
      Auction auction = new Auction();
        auction.setID(rs.getInt("id"));
        auction.setStart(rs.getTimestamp("start"));
        auction.setEnd(rs.getTimestamp("end"));
        auction.setInitialBid(rs.getDouble("initialBid"));
        auction.setCurrentBid(rs.getDouble("currentBid"));
        auction.setBook(
          new Book(
            rs.getInt("id"),
            rs.getString("genre"),
            rs.getString("title"),
            rs.getString("author"),
            rs.getString("isbn"),
            rs.getString("description"))
        );
        auction.setLister(
          new Student(
            rs.getString("lister_first_name"), 
            rs.getString("lister_last_name"), 
            rs.getString("lister_email"))
        );
        auction.setRecipient(
          new Student(
            rs.getString("recipient_first_name"), 
            rs.getString("recipient_last_name"), 
            rs.getString("recipient_email"))
        );
      return auction;
  };
}