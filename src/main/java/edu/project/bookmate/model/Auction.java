package edu.project.bookmate.model;

import java.sql.Timestamp;
import lombok.Data;
import lombok.EqualsAndHashCode;

import org.springframework.jdbc.core.RowMapper;

@Data
@EqualsAndHashCode(callSuper = false)
public class Auction extends Transaction {
  private Timestamp start;
  private Timestamp end;
  private double initialBid;
  private double currentBid; 

  public Auction() {}

  public Auction(Timestamp start, Timestamp end, double initialBid, double currentBid) {
    this.start = start;
    this.end = end;
    this.initialBid = initialBid;
    this.currentBid = currentBid;
  }

  public static RowMapper<Auction> mapper =
    (rs, rowNum) -> {
      Auction auction =
        new Auction(
          rs.getTimestamp("start"),
          rs.getTimestamp("end"),
          rs.getDouble("initialBid"),
          rs.getDouble("currentBid")
        );
      return auction;
    };
}