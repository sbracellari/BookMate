package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Book {
  private int id;
  private String isbn;
  private String author;
  private String title;
  private String genre = "N/A";
  private String desc = "N/A";

  public Book() {}

  public Book(int id, String isbn, String author, String title, String genre, String desc) {
    this.id = id;
    this.isbn = isbn;
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.desc = desc;
  }

  public static RowMapper<Book> mapper =
    (rs, rowNum) -> {
      Book book = new Book(); 
        book.setId(rs.getInt("book_id"));
        book.setIsbn(rs.getString("book_isbn"));
        book.setAuthor(rs.getString("book_author"));
        book.setTitle(rs.getString("book_title"));
        book.setGenre(rs.getString("book_genre"));
        book.setDesc(rs.getString("book_desc"));
      return book;
  };
}