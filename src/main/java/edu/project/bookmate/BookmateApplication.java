package edu.project.bookmate;

import java.util.Arrays;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@ComponentScan({"edu.oakland.soffit.auth", "edu.project.bookmate"})
public class BookmateApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookmateApplication.class, args);
	}

}
