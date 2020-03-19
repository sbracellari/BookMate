package edu.project.bookmate.model;

import java.util.List;
import lombok.Data;

@Data
public class Transaction {
  private List<Trade> trades;
  private List<Purchase> purchases;
  private List<Auction> auctions;

public Transaction(List<Trade> trade,List<Purchase> purchase, List<Auction> auction ){
    this.trades = trade;
    this.purchases = purchase;
    this.auctions = auction;
    }
}