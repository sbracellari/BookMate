package edu.project.bookmate.model;

import java.util.List;
import lombok.Data;

@Data
public class Transaction {
  private List<Purchase> purchases;
  private List<Trade> trades;
  private List<Auction> auctions;

  public Transaction(List<Purchase> purchases, List<Trade> trades, List<Auction> auctions) {
    this.purchases = purchases;
    this.trades = trades;
    this.auctions = auctions;
  }
}