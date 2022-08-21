-- 1 
-- SELECT COUNT(`title`) 
-- FROM task; 
-- 2 
-- SELECT COUNT('title')
-- FROM task
-- WHERE due_date is NULL;
-- 3 
-- SELECT title, s.name
-- FROM task t
-- JOIN status s 
-- ON t.status_id = s.id
-- WHERE name='done';
-- 4 
-- SELECT title, s.name
-- FROM task t
-- JOIN status s 
-- ON t.status_id = s.id
-- WHERE name NOT IN ('done');
-- 5 
-- SELECT title, created
-- FROM `task` 
-- ORDER BY created DESC;
-- 6 
-- SELECT title, created
-- FROM `task` 
-- ORDER BY created DESC
-- limit 1;
-- 7
-- SELECT title, due_date, description
-- FROM task 
-- WHERE title REGEXP 'database'
-- OR description REGEXP 'database';
-- 8
-- SELECT title, s.name
-- FROM task t
-- JOIN status s 
-- ON t.status_id = s.id;
-- 9 
-- SELECT count(title), s.name 
-- FROM task t
-- JOIN status s
-- ON s.id = t.status_id
-- GROUP BY name;
-- 10 
SELECT count(title), s.name 
FROM task t
JOIN status s
ON s.id = t.status_id
GROUP BY name
ORDER BY COUNT(title) DESC;




