package edu.project.bookmate.controller;

import edu.project.bookmate.service.BookMateDB;
import edu.project.bookmate.model.Transaction;

import java.sql.Timestamp;
import java.util.Map;
import edu.oakland.soffit.auth.AuthService;
import edu.oakland.soffit.auth.SoffitAuthException;
import javax.servlet.http.HttpServletRequest;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bookmate/v1")
public class BookMateController {
  protected final Logger log = LoggerFactory.getLogger("bookmate");
  @Autowired private BookMateDB service; // instantiate an instance of the service class
  @Autowired private AuthService authorizer; // this is from the library we're using to do JWT authentication. Instantiate an instance of the auth service

  @ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Invalid JWT")
  @ExceptionHandler(JWTVerificationException.class)
  public void verificationError(Exception e) {
    log.error("Throwing Invalid JWT Error");
    log.error("", e);
  }

  @ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Illegal Arguments given")
  @ExceptionHandler({IllegalArgumentException.class, DataAccessException.class})
  public void illegalArgumentError(Exception e) {
    log.error("Throwing Illegal Argument or Data Access error");
    log.error("", e);
  }

  @ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Invalid JWT")
  @ExceptionHandler(SoffitAuthException.class)
  public void soffitError(SoffitAuthException e) {
    log.error("Invalid JWT");
    log.error("", e);
  }

  @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Unspecified exception")
  @ExceptionHandler(Exception.class)
  public void generalError(Exception e) {
    log.error("Unspecified exception");
    log.error("", e);
  }
 
  // solely to make sure the backend is running
  @GetMapping("status-check")
  public boolean statusCheck() {
    return true;
  }

  // get all transactions
  @GetMapping("get-transactions")
  public Transaction getTransactions() {
    return service.getTransactions();
  }

  // get a student's listed books
  @GetMapping("get-listings")
  public Transaction getMyListings(HttpServletRequest request) throws SoffitAuthException {
    String listerEmail = authorizer.getClaimFromJWT(request, "email").asString();
  return service.getListings(listerEmail);
  }

  // list a book for purchase
  @PostMapping("list-book-for-purchase")
  public void listBookForPurchase(HttpServletRequest request, @RequestBody Map<String, String> book) 
      throws SoffitAuthException {

    String listerEmail = authorizer.getClaimFromJWT(request, "email").asString();
    String isbn = book.get("isbn");
    String title = book.get("title");
    String author = book.get("author");
    String genre = book.get("genre");
    String desc = book.get("desc");
    String price = book.get("price");

    service.listBookForPurchase(genre, title, author, isbn, desc, listerEmail, price);
  }

  // list a book for trade
  @PostMapping("list-book-for-trade")
  public void listBookForTrade(HttpServletRequest request, @RequestBody Map<String, String> book) 
      throws SoffitAuthException {
    String listerEmail = authorizer.getClaimFromJWT(request, "email").asString();
    String isbn = book.get("isbn");
    String title = book.get("title");
    String author = book.get("author");
    String genre = book.get("genre");
    String desc = book.get("desc");

    service.listBookForTrade(genre, title, author, isbn, desc, listerEmail);
  }

  // list a book for auction
  @PostMapping("list-book-for-auction") 
  public void listBookForAuction(HttpServletRequest request, @RequestBody Map<String, Object> book)
      throws SoffitAuthException {
    String listerEmail = authorizer.getClaimFromJWT(request, "email").asString();
    String isbn = book.get("isbn").toString();
    String title = book.get("title").toString();
    String author = book.get("author").toString();
    String genre = book.get("genre").toString();
    String desc = book.get("desc").toString();
    Timestamp endDate = Timestamp.valueOf(book.get("auction_end_date").toString().replace("T", " ").replace("Z", "000"));

    service.listBookForAuction(genre, title, author, isbn, desc, listerEmail, endDate);
  }

  // purchase a book
  @PostMapping("purchase-book")
  public void purchaseBook(HttpServletRequest request, @RequestParam(required = true) int purchaseId)
      throws SoffitAuthException {
    String recipientEmail = authorizer.getClaimFromJWT(request, "email").asString();

    service.purchaseBook(recipientEmail, purchaseId);
  }

  // trade a book
  @PostMapping("trade-book")
  public void tradeBook(HttpServletRequest request, @RequestParam(required = true) int tradeId)
      throws SoffitAuthException {
    String recipientEmail = authorizer.getClaimFromJWT(request, "email").asString();

    service.tradeBook(recipientEmail, tradeId);
  }

  // bid on a book
  @PostMapping("bid")
  public void makeBid(HttpServletRequest request, @RequestBody Map<String, String> bid)
      throws SoffitAuthException {
    String bidderEmail = authorizer.getClaimFromJWT(request, "email").asString();
    String amount = bid.get("amount");
    int auctionId = Integer.parseInt(bid.get("auction_id"));
    
    service.makeBid(bidderEmail, auctionId, amount);
  }

  // create an account
  @PostMapping("create-account")
  public Map<String, String>  addStudent(@RequestBody Map<String, String> student) {
    String email = student.get("email");
    String password = student.get("password");
    String firstName = student.get("first_name");
    String lastName = student.get("last_name");

    return service.addStudent(email, password, firstName, lastName);
  }

  // log in
  @GetMapping("login")
  public Map<String, String> verifyStudent(@RequestParam(required = true) String email) {
    return service.verifyStudent(email);
  }

  // remove a listing of type purchase
  @PostMapping("remove-purchase")
  public void removePurchase(@RequestParam(required = true) int purchaseId) {
    service.removePurchase(purchaseId);
  }

  // remove a listing of type trade
  @PostMapping("remove-trade")
  public void removeTrade(@RequestParam(required = true) int tradeId) {
    service.removeTrade(tradeId);
  }

  // remove a listing of type auction
  @PostMapping("remove-auction")
  public void removeAuction(@RequestParam(required = true) int auctionId) {
    service.removeAuction(auctionId);
  }
}  
