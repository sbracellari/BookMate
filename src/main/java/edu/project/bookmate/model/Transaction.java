package edu.project.bookmate.model;

import java.util.List;
import lombok.Data;

@Data
public class Transaction {
  private List<Trade> trades;
  private List<Purchase> purchases;
  private List<Auction> auctions;

  public Transaction(List<Trade> trades, List<Purchase> purchases, List<Auction> auctions) {
    this.trades = trades;
    this.purchases = purchases;
    this.auctions = auctions;
  }
}