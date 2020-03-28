package edu.project.bookmate.service;

import edu.project.bookmate.dao.Constants;
import edu.project.bookmate.model.Auction;
import edu.project.bookmate.model.Purchase;
import edu.project.bookmate.model.Student;
import edu.project.bookmate.model.Trade;
import edu.project.bookmate.model.Transaction;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class BookMateDB {
  @Autowired
  private JdbcTemplate jdbcTemplate;

  protected final Logger logger = LoggerFactory.getLogger("bookmate");

  @Value("${org.apereo.portal.soffit.jwt.signatureKey}")
  private String SECRET;

  public Transaction getTransactions() {
    Transaction transactions = new Transaction(getPurchases(), getTrades(), getAuctions());

    return transactions;
  }

  private List<Purchase> getPurchases() throws DataAccessException {
    return this.jdbcTemplate.query(Constants.GET_PURCHASES, Purchase.mapper);
  }

  private List<Auction> getAuctions() throws DataAccessException {
    return this.jdbcTemplate.query(Constants.GET_AUCTIONS, Auction.mapper);
  }

  private List<Trade> getTrades() throws DataAccessException {
    return this.jdbcTemplate.query(Constants.GET_TRADES, Trade.mapper);
  }

  public Transaction getListings(String listerEmail) {
    Transaction listings = new Transaction(getListedPurchases(listerEmail), getListedTrades(listerEmail),
        getListedAuctions(listerEmail));

    return listings;
  }

  private List<Purchase> getListedPurchases(String listerEmail) throws DataAccessException {
    return this.jdbcTemplate.query(Constants.GET_LISTED_PURCHASES, new Object[] { listerEmail }, Purchase.mapper);
  }

  private List<Auction> getListedAuctions(String listerEmail) throws DataAccessException {
    return this.jdbcTemplate.query(Constants.GET_LISTED_AUCTIONS, new Object[] { listerEmail }, Auction.mapper);
  }

  private List<Trade> getListedTrades(String listerEmail) throws DataAccessException {
    return this.jdbcTemplate.query(Constants.GET_LISTED_TRADES, new Object[] { listerEmail }, Trade.mapper);
  }

  public void addStudent(String email, String password, String firstName, String lastName) throws DataAccessException {
    jdbcTemplate.update(Constants.ADD_STUDENT, new Object[] { email, password, firstName, lastName });
  }

  public void listBookForPurchase(String genre, String title, String author, String ISBN, String description)
      throws DataAccessException {
    jdbcTemplate.update(Constants.LIST_BOOK_FOR_PURCHASE, new Object[] { genre, title, author, ISBN, description });
  }

  public void listBookForAuction(String genre, String title, String author, String ISBN, String description)
      throws DataAccessException {
    jdbcTemplate.update(Constants.LIST_BOOK_FOR_AUCTION, new Object[] { genre, title, author, ISBN, description });
  }

  public void listBookForTrade(String genre, String title, String author, String ISBN, String description)
      throws DataAccessException {
    jdbcTemplate.update(Constants.LIST_BOOK_FOR_TRADE, new Object[] { genre, title, author, ISBN, description });
  }

  public void makeBid(int auctionID, double amt) throws DataAccessException {
    jdbcTemplate.update(Constants.MAKE_BID, new Object[] { auctionID, amt });
  }

  // public void makeAuction(int auctionID, String recipientEmail) throws
  // DataAccessException {
  // jdbcTemplate.update(Constants.MAKE_AUCTION, new Object[] {auctionID,
  // recipientEmail});
  // }

  // public void makeTrade(int tradeID, int tradeeBookID, String tradeeEmail)
  // throws DataAccessException {
  // jdbcTemplate.update(Constants.MAKE_TRADE, new Object[] {tradeID,
  // tradeeBookID, tradeeEmail});
  // }

  // public void makePurchase(int purchaseID, String recipientEmail) throws
  // DataAccessException {
  // jdbcTemplate.update(Constants.MAKE_PURCHASE, new Object[] {purchaseID,
  // recipientEmail});
  // }

  public void removeAuction(int auctionId) throws DataAccessException {
    jdbcTemplate.update(Constants.REMOVE_AUCTION, new Object[] { auctionId });
  }

  public void removePurchase(int purchaseId) throws DataAccessException {
    jdbcTemplate.update(Constants.REMOVE_PURCHASE, new Object[] { purchaseId });
  }

  public void removeTrade(int tradeId) throws DataAccessException {
    jdbcTemplate.update(Constants.REMOVE_TRADE, new Object[] { tradeId });
  }

  public Map<String, String> verifyStudent(String email) throws DataAccessException {
    Map<String, String> loginInfo = new HashMap<>();
    String password = jdbcTemplate.queryForObject(Constants.VERIFY_STUDENT, new Object[] { email }, String.class);
    String jws = Jwts.builder()
                  .setIssuer("App")
                  .claim("email", email)
                  .signWith(SignatureAlgorithm.HS256, SECRET)
                  .compact();
    loginInfo.put("token", jws);
    loginInfo.put("password", password);

    return loginInfo;
  }
}
