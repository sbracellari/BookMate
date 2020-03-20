package edu.project.bookmate.model;

import lombok.Data;
import org.springframework.jdbc.core.RowMapper;

@Data
public class Student {
  private String firstName;
  private String lastName;
  private String email;

  public Student() {}

  public Student(String firstName, String lastName, String email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  public static RowMapper<Student> mapper =
    (rs, rowNum) -> {
     Student student = new Student();
        student.setFirstName(rs.getString("firstName"));
        student.setLastName(rs.getString("lastName"));
        student.setEmail(rs.getString("email"));
      return student;
    };
}