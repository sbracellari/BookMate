package edu.project.bookmate;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@ComponentScan({"edu.oakland.soffit.auth", "edu.project.bookmate"})
public class BookmateApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookmateApplication.class, args);
	}

}
