create database if not exists school_db;
use school_db;
/* 
TASK 1
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key)
*/
drop table `class`;
create table `class`(
`id` int unsigned not null auto_increment primary key,
`name`varchar(255) not null,
`begins` datetime not null,
`ends` datetime not null,
`status` ENUM ('not started','ongoing','finished')
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/* runing this gives me error bcz I changed the name value
insert into class (id, name, begins, ends, status) values (1,'class13', '2019-01-15', '2022-12-12','ongoing');
insert into class (id, name, begins, ends, status) values (2,'class11', '2017-04-15', '2022-10-12','ongoing');
insert into class (id, name, begins, ends, status) values (3,'class12', '2018-01-20', '2020-10-20','finished');
insert into class (id, name, begins, ends, status) values (4,'class07', '2010-01-15', '2014-06-12','finished');
insert into class (id, name, begins, ends, status) values (5,'class18', '2025-09-15', '2028-08-12','not started');
insert into class (id, name, begins, ends, status) values (6,'class11', '2017-03-15', '2021-07-27','finished');
insert into class (id, name, begins, ends, status) values (7,'class14', '2020-10-15', '2024-10-12','ongoing');
insert into class (id, name, begins, ends, status) values (8,'class13', '2019-11-15', '2023-06-30','ongoing');
insert into class (id, name, begins, ends, status) values (9,'class16', '2023-06-23', '2027-06-27','not started');
insert into class (id, name, begins, ends, status) values (10,'class11', '2017-01-15', '2022-10-12','ongoing');
insert into class (id, name, begins, ends, status) values (11,'class11', '2017-01-15', '2022-10-12','ongoing');
*/

create table `student`(
`id` int unsigned not null auto_increment primary key,
`name` varchar(255) not null,
`email` varchar (255) not null,
`phone` varchar(255) not null,
`class_id`int unsigned not null,
CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into student(id, name, email, phone, class_id) value (1, 'Alayna Caldwell', 'alayne@email.com', '235-572-7467', 1);
insert into student(id, name, email, phone, class_id) value (2, 'Deangelo Villarreal', 'deangelo@email.com', '735-582-4867', 2);
insert into student(id, name, email, phone, class_id) value (3, 'Zaiden Villegas', 'zaiden@email.com', '135-972-7460', 3);
insert into student(id, name, email, phone, class_id) value (4, 'Aimee Short', 'aimee@email.com', '235-170-5467', 4);
insert into student(id, name, email, phone, class_id) value (5, 'Chris Delgado', 'chris@email.com', '635-502-3597', 5);
insert into student(id, name, email, phone, class_id) value (6, 'Mekhi Braun', 'mekhi@email.com', '342-102-6567', 6);
insert into student(id, name, email, phone, class_id) value (7, 'Brenda Stephenson', 'brenda@email.com', '125-587-7247', 7);
insert into student(id, name, email, phone, class_id) value (8, 'Jayce Mueller', 'jayce@email.com', '114-472-2567', 8);
insert into student(id, name, email, phone, class_id) value (9, 'Jacoby Costa', 'jacoby@email.com', '535-602-3427', 9);
insert into student(id, name, email, phone, class_id) value (10, 'AAyanna Yates', 'aayanna@email.com', '985-952-1367', 10);
insert into student(id, name, email, phone, class_id) value (11, 'Kristina Carroll', 'kristina@email.com', '285-982-8354', 11);
-- TASK 2
CREATE INDEX index_name
ON student (name);
-- task 3


