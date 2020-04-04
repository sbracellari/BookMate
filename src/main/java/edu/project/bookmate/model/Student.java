package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Student {
  private String firstName;
  private String lastName;
  private String email;
  private String password;

  public Student() {}

  public Student(String email, String password, String firstName, String lastName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public Student(String password) {
    this.password = password;
  }

  public Student(String email, String firstName, String lastName) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static RowMapper<Student> mapper =
    (rs, rowNum) -> {
     Student student = new Student();
       student.setEmail(rs.getString("student_email"));
       student.setPassword(rs.getString("student_password"));
       student.setFirstName(rs.getString("student_fname"));
       student.setLastName(rs.getString("student_lname"));
      return student;
    };
}