package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Book {
  private String genre;
  private String title;
  private String author;
  private String ISBN;
  private String description;
  private int ID;

  public Book(String genre, String title, String author, String ISBN, String description, int ID {
    this.genre = genre;
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.description = description;
    this.ID = ID;
  }

  public static RowMapper<Book> mapper =
    (rs, rowNum) -> {
      Book book = 
        new Book(
          rs.getString("genre"),
          rs.getString("title"),
          rs.getString("author"),
          rs.getString("ISBN"),
          rs.getString("description"),
          rs.getString("ID")
        );
      return book;
    };
}