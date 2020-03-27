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
    "     AND STUDENT.STUDENT_EMAIL = ?                   " +
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
    "     AND STUDENT.STUDENT_EMAIL = ?                 " +
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
    "     AND STUDENT.STUDENT_EMAIL = ?                   " +
    "     AND PURCHASE.STUDENT_RECIPIENT_EMAIL IS NULL                 " ;

  public static final String GET_MOST_RECENT_BOOK_ID = 
    " INSERT               " +
	"     INTO BOOK        " +
	"     (BOOK_ISBN,      " +
	"     BOOK_AUTHOR,     " +
	"     BOOK_TITLE,      " +
	"     BOOK_GENRE,      " +
	"     BOOK_DESC)       " +
	" VALUES               " +
	"     (:isbn,          " +
    "     :author,         " +
    "     :title,          " +
    "     :genre,          " +
	"     :desc)           " +
	" RETURNING BOOK_ID    " ;

  public static final String LIST_BOOK_FOR_PURCHASE = 
    " INSERT                       " +
	"     INTO PURCHASE            " +
	"     (PURCHASE_PRICE,         " +
	"     STUDENT_LISTER_EMAIL,    " +
	"     BOOK_ID )                " +
	" VALUES                       " +
	"     (:price,                 " +
    "     :listerEmail,            " +
	"     :bookId)                 " ;
	
  public static final String LIST_BOOK_FOR_TRADE = 
    " INSERT                        " +
	"     INTO TRADE                " +
	"     (STUDENT_LISTER_EMAIL,    " +
	"     BOOK_TRADER_ID )          " +
    " VALUES                        " +
	"	  (:listerEmail,            " +
	"     :bookId)                  " ; 
	
  public static final String LIST_BOOK_FOR_AUCTION = 
    " INSERT                       " +
	"     INTO AUCTION             " +
	"     (AUCTION_INITIAL_BID,    " +
	"     AUCTION_CURRENT_BID,     " +
	"     AUCTION_START_DATE,      " +
	"     AUCTION_END_DATE,        " +
	"     STUDENT_LISTER_EMAIL,    " +
	"     BOOK_ID )                " +
	" VALUES                       " +
	"     (0,                      " +
    "     0,                       " +
    "     NOW(),                   " +
    "     :end,                    " +
    "     :listerEmail,            " +
	"     :bookId)                 " ;
	
  public static final String ADD_STUDENT = 
    " INSERT                   " +
	"     INTO STUDENT         " +
	"     (STUDENT_EMAIL,      " +
	"     STUDENT_PASSWORD,    " +
	"     STUDENT_FNAME,       " +
	"     STUDENT_LNAME)       " +
	" VALUES                   " + 
	"     (:email,             " +
    "     :password,           " +
    "     :firstName,          " +
    "     :lastName)           " ;

  public static final String VERIFY_STUDENT =
    " SELECT                                  " +
	"     STUDENT_PASSWORD                    " +
    " FROM                                    " +
    "     STUDENT                             " +
    " WHERE                                   " +
    "     STUDENT_EMAIL = ?                   " ;

  public static final String REMOVE_AUCTION = 
    " DELETE                                     " +
    " FROM                                       " +
    "     AUCTION                                " +
    " WHERE                                      " +
    "     AUCTION_ID = ?                         " +
    "     AND STUDENT_RECIPIENT_EMAIL IS NULL    " ;

  public static final String REMOVE_PURCHASE = 
    " DELETE                                     " +
    " FROM                                       " +
    "     PURCHASE                               " +
    " WHERE                                      " +
    "     PURCHASE_ID = ?                        " +
    "     AND STUDENT_RECIPIENT_EMAIL IS NULL    " ;

  public static final String REMOVE_TRADE = 
    " DELETE                                     " +
    " FROM                                       " +
    "     TRADE                                  " +
    " WHERE                                      " +
    "     TRADE_ID = ?                           " +
    "     AND STUDENT_RECIPIENT_EMAIL IS NULL    " ;

  public static final String MAKE_BID = 
    " UPDATE                                                          " +
    "     AUCTION                                                     " +
    " SET                                                             " +
    "     AUCTION_INITIAL_BID =                                       " +
    "     CASE                                                        " +
    "         WHEN AUCTION_INITIAL_BID IS NULL THEN :bidAmount        " +
    "         ELSE AUCTION_INITIAL_BID END,                           " +
    "     AUCTION_CURRENT_BID =                                       " +
    "     CASE                                                        " +
    "         WHEN AUCTION_INITIAL_BID IS NOT NULL THEN :bidAmount    " +
    "         ELSE AUCTION_CURRENT_BID END                            " +
    " WHERE                                                           " +
	"     AUCTION_ID = ?                                              " ;
	
//   public static final String MAKE_AUCTION = "";

//   public static final String MAKE_TRADE = "";

//   public static final String MAKE_PURCHASE = "";
}