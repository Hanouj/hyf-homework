USE hyf_lesson1;
-- 1
describe task;
INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
values ('Feed the cat', 'give it wet food and water', '2017-11-26 12:09:20', '2017-11-30 13:29:20', '2017-12-26 06:30:40', 3, 3);
SELECT * FROM task;
-- 2 
update task
set title="Get icecream and some sunshine", description='take a friend with you'
where id=2;
select * from task;

-- 3
update task
set title="Get icecream and some sunshine", description='take a friend with you', due_date='2018-01-03 10:00:00'
where id=2;
select * from task;
-- 4 
update task
set status_id=1
where id=2;
select * from task;

INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
values ('go for a walk', 'in the garden', '2017-11-26 12:09:20', '2017-11-30 13:29:20', '2017-12-26 06:30:40', 3, 3);
SELECT * FROM task;
update task 
set due_date = '2017-12-26 12:30:40'
where id =48;
delete from task
where id=48;

-- 5 mark a task as complete
INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
values ('go for a walk', 'in the garden', '2017-11-26 12:09:20', '2017-11-30 13:29:20', '2017-12-26 06:30:40', 3, 3);
select task.id, task.title, task.status_id, status.name
from task 
join status 
on task.status_id = status.id
where task.id =49;
-- 6 
delete from task 
where id=46;
select * from task;


