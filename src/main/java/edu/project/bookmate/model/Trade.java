package edu.project.bookmate.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class Trade{
  private int traderBookID;
  private int tradeeBookID;
  private String listerEmail;
  private String recipientEmail;

    public Trade(int traderBookID, int tradeeBookID, String listerEmail, String recipientEmail){
        this.traderBookID = traderBookID;
        this.tradeeBookID = tradeeBookID;
        this.listerEmail = listerEmail;
        this.recipientEmail = recipientEmail;
        }

  public static RowMapper<Trade> mapper =
    (rs, rowNum) -> {
      Trade trade =
        new Trade(
          rs.getint("traderBookID"),
          rs.getint("tradeeBookID"),
          rs.getString("listerEmail"),
          rs.getString("recipientEmail")
        );
      return trade;
    };
}