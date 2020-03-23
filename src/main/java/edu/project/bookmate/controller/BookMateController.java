package edu.project.bookmate.controller;

import edu.project.bookmate.service.BookMateDB;
import edu.project.bookmate.model.Transaction;

import java.util.List;
import java.util.HashMap;
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
  @GetMapping("my-listings")
  public Transaction getMyListings(HttpServletRequest request) {
    // String listerEmail = authorizer.getClaimFromJWE(request, "email").asString();
    String listerEmail = "jkeeling@oakland.edu";
    return service.getListings(listerEmail);
  }

  // @PostMapping("remove-book/{bookID}") // the thing in the curly brace is a path variable, passed from the front end

  // @PostMapping("list-book/{transaction}/{bookID}")

  // @PostMapping("purchase-book/{bookID}")

  // @PostMapping("trade-book/{bookID}")

  // @PostMapping("bid/{bookID}")

  // @PostMapping("register")

  @PostMapping("login")
  public void verifyStudent(String email, String password) {
    service.verifyStudent(email, password);
  }
}  