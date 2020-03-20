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

  public Book() {}

  public Book(int ID, String genre, String title, String author, String ISBN, String description) {
    this.ID = ID;
    this.genre = genre;
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.description = description;
  }

  public static RowMapper<Book> mapper =
    (rs, rowNum) -> {
      Book book = new Book(); 
        book.setID(rs.getInt("id"));
        book.setGenre(rs.getString("genre"));
        book.setTitle(rs.getString("title"));
        book.setAuthor(rs.getString("author"));
        book.setISBN(rs.getString("isbn"));
        book.setDescription(rs.getString("desscription"));
      return book;
  };
}