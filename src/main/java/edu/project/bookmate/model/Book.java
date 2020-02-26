package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Book {
  private String genre;
  private String title;
  private String author;
  private String ISBN;

  public Book() {}

  public Book(String genre, String title, String author, String ISBN) {
    this.genre = genre;
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }

  public static RowMapper<Book> mapper =
    (rs, rowNum) -> {
      Book book = 
        new Book(
          rs.getString("genre"),
          rs.getString("title"),
          rs.getString("author"),
          rs.getString("ISBN")
        );
      return book;
    };
}