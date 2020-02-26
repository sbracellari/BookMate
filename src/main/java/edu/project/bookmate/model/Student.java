package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Student {
  private String firstName;
  private String lastName;
//   private String GID;
  private String username;
  private String email;

  public Student() {}

  public Student(String firstName, String lastName, String username, String email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
  }

  public static RowMapper<Student> mapper =
    (rs, rowNum) -> {
      Student student = 
        new Student(
          rs.getString("firstName"),
          rs.getString("lastName"),
          rs.getString("username"),
          rs.getString("email")
        );
      return student;
    };
}