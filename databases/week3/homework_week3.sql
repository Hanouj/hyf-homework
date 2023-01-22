CREATE database meal_sharing;
use meal_sharing;
CREATE TABLE meal(
	`id` INT UNSIGNED AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT UNSIGNED NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE reservation (
    `id` INT UNSIGNED AUTO_INCREMENT,
    `number_of_guests` INT UNSIGNED NOT NULL,
    `meal_id` INT UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
    
    CREATE TABLE review (
    `id` INT UNSIGNED AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT(255) NOT NULL,
    `meal_id` INT UNSIGNED NOT NULL,
    `stars` INT UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (id),
   CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Queries for meal table 
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES ('pizza sandwish', 'it has beef and cheese with dressing', 'vejle', '2022-08-31 12:30:00', 10, 1200, '2022-08-30'),
        ('burger', 'chicken cheese burger with extra cheese', 'copenhagen', '2022-09-01 20:00:00', 5, 870, '2022-08-31'),
        ('apple pie', 'pie desert made with pie', 'Aarhus', '2022-05-20 10:20:00', 20, 150, '2022-04-02' );
-- get all meals
select * 
from meal; 
-- get a meal from id=2
select * 
from meal 
where id =2;
-- update
UPDATE meal 
SET `max_reservations` =7,`price`=1200
WHERE id =2;
-- Delete
DELETE FROM meal
WHERE id = 3;

-- Queries for reservation table 
INSERT INTO `reservation`(`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES (4, 1, '2022-07-26', '60545755', 'Hanaa', 'hanaa@gmail.com'),
        (3, 1, '2022-04-08', '12390293', 'Asma', 'asma@gmail.com'),
        (8, 2, '2022-05-01', '58584608', 'Huda', 'huda@gmail.com');
-- get all reservations
select *
from `reservation`;
-- get resevration id=1
select *
from `reservation`
where id=1;
-- update 
UPDATE `reservation` 
SET `number_of_guests` =7
WHERE id =1;
-- delete
DELETE 
FROM Reservation 
WHERE id=2;
        
-- Queries for Review table
INSERT INTO `Review` (`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES ('medium','its okay','1','3','2022-05-24'),
('very good','its very tasty','1','4.5','2022-07-08'),
('bad','something wrong','2','1','2022-06-30');
-- get all review table
select *
from `review`;
-- get a review from id=2
select *
from `review`
where id=2;
-- update 
UPDATE `review` 
SET `description` ='it had no taste at all', stars=1.5
WHERE id =3;
-- delete
DELETE 
FROM `review` 
WHERE id=3;
-- Additional queries   
-- prices less than 1000
select * 
from `meal`
where `price` <1000;
-- meals with availble reservation
-- meals that partially match a title
SELECT * FROM `Meal`
WHERE title LIKE '%pizza%';
-- meals that has been created between two dates
SELECT * FROM meal
WHERE created_date BETWEEN '2022-08-31' AND '2022-09-10';
-- limit meals
SELECT * FROM `meal` LIMIT 2;
-- meals with good review 
select m.id, m.title, rv.title, rv.description
from meal m 
join review rv
on m.id = rv.meal_id
where rv.stars >4;
-- reservations for a specific meal sorted by created_date
select r.contact_name, r.contact_email, r.contact_phonenumber, r.number_of_guests, m.title, m.created_date
from `reservation`r
join meal m
ON r.meal_id = m.id
where m.title='shawarma'
ORDER BY r.created_date DESC;

-- sorting all meals by average number of stars in the reviews
select rv.meal_id, m.title, avg(rv.stars) 'stars average'
from review rv
join meal m
on rv.meal_id=m.id
GROUP BY rv.meal_id
ORDER BY 'stars average';

