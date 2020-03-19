package edu.project.bookmate.model;

import java.sql.Timestamp;
import lombok.Data;
import lombok.EqualsAndHashCode;

import org.springframework.jdbc.core.RowMapper;

@Data
@EqualsAndHashCode(callSuper = false)
public class Auction {
  private int ID;
  private Timestamp start;
  private Timestamp end;
  private double initialBid;
  private double currentBid; 
  private int bookID;
  private String listerEmail;
  private String recipientEmail; 

  public Auction(int ID, Timestamp startTime, Timestamp endTime, double initialBid, double currentBid, int bookID, String listerEmail, String recipientEmail) {
    this.ID = ID;
    this.start = startTime;
    this.end = endTime;
    this.initialBid = initialBid;
    this.currentBid = currentBid;
    this.bookID = bookID;
    this.listerEmail = listerEmail;
    this.recipientEmail = recipientEmail;
  }

  public static RowMapper<Auction> mapper =
    (rs, rowNum) -> {
      Auction auction =
        new Auction(
          rs.getTimestamp("start"),
          rs.getTimestamp("end"),
          rs.getDouble("initialBid"),
          rs.getDouble("currentBid"),
          rs.getInt("id"),
          rs.getInt("bookID"),
          rs.getString("listerEmail"),
          rs.getString("recipientEmail")
        );
      return auction;
    };
}