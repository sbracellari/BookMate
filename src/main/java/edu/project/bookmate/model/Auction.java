package edu.project.bookmate.model;

import java.sql.Timestamp;
import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Auction {
  private int id;
  private Timestamp start;
  private Timestamp end;
  private double initialBid;
  private double currentBid; 
  private Book book;
  private Student lister;

  public static RowMapper<Auction> mapper =
    (rs, rowNum) -> {
      Auction auction = new Auction();
        auction.setId(rs.getInt("auction_id"));
        auction.setStart(rs.getTimestamp("auction_start_date"));
        auction.setEnd(rs.getTimestamp("auction_end_date"));
        auction.setInitialBid(rs.getDouble("auction_initial_bid"));
        auction.setCurrentBid(rs.getDouble("auction_current_bid"));
        auction.setLister(
          new Student(
            rs.getString("student_lister_email"),
            rs.getString("student_fname"), 
            rs.getString("student_lname"))
            
        );
        auction.setBook(
          new Book(
            rs.getInt("book_id"),
            rs.getString("book_isbn"),
            rs.getString("book_author"),
            rs.getString("book_title"),
            rs.getString("book_genre"),
            rs.getString("book_desc"))
        );
        
      return auction;
  };
}