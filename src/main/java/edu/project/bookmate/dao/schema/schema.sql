create table if not exists student(
    student_email varchar(100) primary key,
    student_password varchar(45) not null,
    student_fname varchar(20) not null,
    student_lname varchar(20) not null
);

create table if not exists book(
    book_id int generated always as identity primary key,
    book_isbn varchar(17) not null,
    book_author varchar(45) not null, 
    book_title varchar(45) not null, 
    book_genre varchar(20), 
    book_desc varchar(150)
);

create table if not exists auction(
    auction_id int generated always as identity primary key,
    auction_start_date timestamp not null,
    auction_end_date timestamp not null,
    auction_initial_bid varchar(10),
    auction_current_bid varchar(10),
    student_current_bidder varchar(100) references student(student_email),
    student_lister_email varchar(100) not null references student(student_email),
    student_recipient_email varchar(100) references student(student_email),
    book_id int references book(book_id)
);

create table if not exists trade(
    trade_id int generated always as identity primary key, 
    student_lister_email varchar(100) not null references student(student_email),
    student_recipient_email varchar(100) references student(student_email),
    book_id int not null references book(book_id)
);

create table if not exists purchase(
    purchase_id int generated always as identity primary key,
    purchase_price varchar(10) not null,
    student_lister_email varchar(100) not null references student(student_email),
    student_recipient_email varchar(100) references student(student_email),
    book_id int references book(book_id)
);