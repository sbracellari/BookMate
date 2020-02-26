package edu.project.bookmate.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class Trade extends Transaction {
  private Book tradeBook;
}