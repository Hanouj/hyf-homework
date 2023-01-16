use hyf_lesson1;
-- 1
select t.id, t.title, u.name, u.email, t.user_id
from task t 
join user u
on t.user_id = u.id
where email REGEXP '@spotify.com$';
-- 2 
select u.name, s.name, t.status_id
from user u
join task t
on t.user_id = u.id
join status s
on t.status_id=s.id
where u.name REGEXP 'Donald Duck'
AND s.name= 'not started';
-- 3
select t.id, t.title, u.name, t.created, t.user_id
from task t 
join user u
on t.user_id = u.id
where name ='Maryrose Meadows'
and month(created)=9;
-- 4 
select id, count(title), month(created) as month, user_id
from task  
group by month;

select *
from `user`
where name REGEXP 'Donald Duck';

