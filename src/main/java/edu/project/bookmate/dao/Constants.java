package edu.project.bookmate.dao;

public class Constants {

  public static final String GET_AUCTIONS = 
    " SELECT                                                          " +
	  "     AUCTION.AUCTION_ID,                                         " +
	  "     AUCTION.AUCTION_START_DATE,                                 " +
	  "     AUCTION.AUCTION_END_DATE,                                   " +
	  "     AUCTION.AUCTION_INITIAL_BID,                                " +
	  "     AUCTION.AUCTION_CURRENT_BID,                                " +
	  "     AUCTION.STUDENT_LISTER_EMAIL,                               " +
	  "     STUDENT.STUDENT_FNAME,                                      " +
	  "     STUDENT.STUDENT_LNAME,                                      " +
	  "     BOOK.BOOK_ID,                                               " +
	  "     BOOK.BOOK_ISBN,                                             " +
	  "     BOOK.BOOK_AUTHOR,                                           " +
	  "     BOOK.BOOK_TITLE,                                            " +
	  "     BOOK.BOOK_GENRE,                                            " +
	  "     BOOK.BOOK_DESC                                              " +
    " FROM                                                            " +
	  "     AUCTION,                                                    " +
	  "     STUDENT,                                                    " +
	  "     BOOK                                                        " +
    " WHERE                                                           " +
	  "     AUCTION.BOOK_ID = BOOK.BOOK_ID                              " +
	  "     AND AUCTION.STUDENT_LISTER_EMAIL = STUDENT.STUDENT_EMAIL    " +
    "     AND AUCTION.STUDENT_RECIPIENT_EMAIL IS NULL                 " ;

  public static final String GET_PURCHASES = 
    " SELECT                                                           " +
	  "     PURCHASE.PURCHASE_ID,                                        " +
	  "     PURCHASE.PURCHASE_PRICE,                                     " +
	  "     PURCHASE.STUDENT_LISTER_EMAIL,                               " +
	  "     STUDENT.STUDENT_FNAME,                                       " +
	  "     STUDENT.STUDENT_LNAME,                                       " +
	  "     BOOK.BOOK_ID,                                                " +
	  "     BOOK.BOOK_ISBN,                                              " +
	  "     BOOK.BOOK_AUTHOR,                                            " +
	  "     BOOK.BOOK_TITLE,                                             " +
	  "     BOOK.BOOK_GENRE,                                             " +
	  "     BOOK.BOOK_DESC                                               " +
    " FROM                                                             " +
	  "     PURCHASE,                                                    " +
	  "     STUDENT,                                                     " +
	  "     BOOK                                                         " +
    " WHERE                                                            " +
	  "     PURCHASE.BOOK_ID = BOOK.BOOK_ID                              " +
	  "     AND PURCHASE.STUDENT_LISTER_EMAIL = STUDENT.STUDENT_EMAIL    " +
    "     AND PURCHASE.STUDENT_RECIPIENT_EMAIL IS NULL                 " ;

  public static final String GET_TRADES = 
    " SELECT                                                        " +
	  "     TRADE.TRADE_ID,                                           " +
	  "     TRADE.STUDENT_LISTER_EMAIL,                               " +
	  "     STUDENT.STUDENT_FNAME,                                    " +
	  "     STUDENT.STUDENT_LNAME,                                    " +
	  "     BOOK.BOOK_ID,                                             " +
	  "     BOOK.BOOK_ISBN,                                           " +
	  "     BOOK.BOOK_AUTHOR,                                         " +
	  "     BOOK.BOOK_TITLE,                                          " +
	  "     BOOK.BOOK_GENRE,                                          " +
	  "     BOOK.BOOK_DESC                                            " +
    " FROM                                                          " +
	  "     TRADE,                                                    " +
	  "     STUDENT,                                                  " +
	  "     BOOK                                                      " +
    " WHERE                                                         " +
	  "     TRADE.BOOK_TRADER_ID = BOOK.BOOK_ID                       " +
	  "     AND TRADE.STUDENT_LISTER_EMAIL = STUDENT.STUDENT_EMAIL    " +
    "     AND TRADE.STUDENT_RECIPIENT_EMAIL IS NULL                 " ;

  public static final String GET_LISTED_AUCTIONS = 
    " SELECT                                                          " +
	  "     AUCTION.AUCTION_ID,                                         " +
	  "     AUCTION.AUCTION_START_DATE,                                 " +
	  "     AUCTION.AUCTION_END_DATE,                                   " +
	  "     AUCTION.AUCTION_INITIAL_BID,                                " +
	  "     AUCTION.AUCTION_CURRENT_BID,                                " +
	  "     AUCTION.STUDENT_LISTER_EMAIL,                               " +
	  "     STUDENT.STUDENT_FNAME,                                      " +
	  "     STUDENT.STUDENT_LNAME,                                      " +
	  "     BOOK.BOOK_ID,                                               " +
	  "     BOOK.BOOK_ISBN,                                             " +
	  "     BOOK.BOOK_AUTHOR,                                           " +
	  "     BOOK.BOOK_TITLE,                                            " +
	  "     BOOK.BOOK_GENRE,                                            " +
	  "     BOOK.BOOK_DESC                                              " +
    " FROM                                                            " +
	  "     AUCTION,                                                    " +
	  "     STUDENT,                                                    " +
	  "     BOOK                                                        " +
    " WHERE                                                           " +
	  "     AUCTION.BOOK_ID = BOOK.BOOK_ID                              " +
    "     AND AUCTION.STUDENT_LISTER_EMAIL = STUDENT.STUDENT_EMAIL    " +
    "     AND STUDENT.STUDENT_EMAIL = :listerEmail                    " +
    "     AND AUCTION.STUDENT_RECIPIENT_EMAIL IS NULL                 " ;

  public static final String GET_LISTED_TRADES = 
    " SELECT                                                        " +
	  "     TRADE.TRADE_ID,                                           " +
	  "     TRADE.STUDENT_LISTER_EMAIL,                               " +
	  "     STUDENT.STUDENT_FNAME,                                    " +
	  "     STUDENT.STUDENT_LNAME,                                    " +
	  "     BOOK.BOOK_ID,                                             " +
	  "     BOOK.BOOK_ISBN,                                           " +
	  "     BOOK.BOOK_AUTHOR,                                         " +
	  "     BOOK.BOOK_TITLE,                                          " +
	  "     BOOK.BOOK_GENRE,                                          " +
	  "     BOOK.BOOK_DESC                                            " +
    " FROM                                                          " +
	  "     TRADE,                                                    " +
	  "     STUDENT,                                                  " +
	  "     BOOK                                                      " +
    " WHERE                                                         " +
	  "     TRADE.BOOK_TRADER_ID = BOOK.BOOK_ID                       " +
    "     AND TRADE.STUDENT_LISTER_EMAIL = STUDENT.STUDENT_EMAIL    " +
    "     AND STUDENT.STUDENT_EMAIL = :listerEmail                  " +
    "     AND TRADE.STUDENT_RECIPIENT_EMAIL IS NULL                 " ;

  public static final String GET_LISTED_PURCHASES = 
    " SELECT                                                           " +
	  "     PURCHASE.PURCHASE_ID,                                        " +
	  "     PURCHASE.PURCHASE_PRICE,                                     " +
	  "     PURCHASE.STUDENT_LISTER_EMAIL,                               " +
	  "     STUDENT.STUDENT_FNAME,                                       " +
	  "     STUDENT.STUDENT_LNAME,                                       " +
	  "     BOOK.BOOK_ID,                                                " +
	  "     BOOK.BOOK_ISBN,                                              " +
	  "     BOOK.BOOK_AUTHOR,                                            " +
	  "     BOOK.BOOK_TITLE,                                             " +
	  "     BOOK.BOOK_GENRE,                                             " +
	  "     BOOK.BOOK_DESC                                               " +
    " FROM                                                             " +
	  "     PURCHASE,                                                    " +
	  "     STUDENT,                                                     " +
	  "     BOOK                                                         " +
    " WHERE                                                            " +
	  "     PURCHASE.BOOK_ID = BOOK.BOOK_ID                              " +
    "     AND PURCHASE.STUDENT_LISTER_EMAIL = STUDENT.STUDENT_EMAIL    " +
    "     AND STUDENT.STUDENT_EMAIL = :listerEmail                     " +
    "     AND PURCHASE.STUDENT_RECIPIENT_EMAIL IS NULL                 " ;

  public static final String VERIFY_STUDENT = "";

  public static final String ADD_STUDENT = "";

  public static final String REMOVE_LISTING = "";

  public static final String LIST_BOOK_FOR_PURCHASE = "";

  public static final String LIST_BOOK_FOR_TRADE = "";

  public static final String LIST_BOOK_FOR_AUCTION = "";

  public static final String MAKE_BID = "";

  public static final String MAKE_AUCTION = "";

  public static final String MAKE_TRADE = "";

  public static final String MAKE_PURCHASE = "";
}