create database countries;
use countries; 

create table countries (
    country_id int auto_increment,
    name varchar(255) not null,
    area decimal(10,2) not null,
    national_day date,
    primary key (country_id)
);
create table country_stats(
    country_id int,
    year int,
    population int,
    primary key (country_id, year),
    foreign key(country_id)
	references countries(country_id)
);
create table country_languages(
    country_id int,
    language_id int,
    official boolean not null,
    primary key (country_id, language_id),
    foreign key(country_id) 
	references countries(country_id),
    foreign key(language_id) 
	references languages(language_id)
);
create table languages(
    language_id int auto_increment,
    language varchar(255) not null,
    primary key (language_id)
);
