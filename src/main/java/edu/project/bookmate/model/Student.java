package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Student {
  private String firstName;
  private String lastName;
  private String email;
  private String password;

  public Student(String firstName, String lastName, String email, String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  public static RowMapper<Student> mapper =
    (rs, rowNum) -> {
      Student student = 
        new Student(
          rs.getString("firstName"),
          rs.getString("lastName"),
          rs.getString("email"),
          rs.getString("password")
        );
      return student;
    };
}