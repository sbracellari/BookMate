package edu.project.bookmate.model;

import java.util.List;
import lombok.Data;

@Data
public class Transaction {
  private List<Trade> trades;
  private List<Purchase> purchases;
  private List<Auction> auctions;
  private Student lister;
  private Student recipient;
//   private String location;
  private Book listedBook;
}