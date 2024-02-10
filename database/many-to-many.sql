create table users (
	user_id SERIAL PRIMARY KEY,
	name varchar(100),
	phone varchar(10),
	address varchar(100)
)


create table invites (
	invites_id SERIAL PRIMARY KEY,
	invite_name varchar(100),
	invite_description varchar(100),
	user_id INTEGER,
	CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id)
)

select * from users
select * from invites
select * from sub_type
select * from sub

insert into users (name, phone, address ) values 
	('moshe', '052-828282', 'Geula Cohen'),
	('israel', '052-828282', 'Geula Cohen'),
	('itsik', '052-828282', 'Geula Cohen')

insert into invites (invite_name, invite_description, user_id) values
('"One"', '"first invites"', 1),
('"baloon"', '"second invites"', 1),
('"baloon"', '"second invites"', 2),
('"baloon"', '"second invites"', 3)

DROP table sub CASCADE;

CREATE VIEW invite_view as select * from invites 
inner join users on invites.user_id = users.user_id




create table sub_type (
	sub_type_id SERIAL PRIMARY KEY,
	sub_type_name varchar(100),
	sub_type_description varchar(100),
	sub_type_price float
)

insert into sub_type (sub_type_name, sub_type_description, sub_type_price ) values 
	('video', 'video bla bla', 9.99),
	('audio', 'audio bla bla', 19.99),
	('books', 'book bla bla', 29.99)

create table sub (
	sub_id SERIAL PRIMARY KEY,
	sub_description varchar(100),
	user_id INTEGER REFERENCES users(user_id),
	sub_type_id INTEGER REFERENCES sub_type(sub_type_id)
)

insert into sub (sub_description, user_id, sub_type_id) values
	('invite one', 2, 3),
	('invite one', 1, 3),
	('invite one', 3, 3),
	('invite one', 2, 1)

create table sub (
	sub_description varchar(100),
	user_id INTEGER REFERENCES users(user_id),
	sub_type_id INTEGER REFERENCES sub_type(sub_type_id),
	PRIMARY KEY (user_id, sub_type_id)
)

select sub_description, users.name, users.phone, sub_type.sub_type_name, sub_type.sub_type_price from sub 
inner join users on users.user_id = sub.user_id
inner join sub_type on sub.sub_type_id = sub_type.sub_type_id



select * from sub
inner join users on users.user_id = sub.user_id and sub_type_id = 3
inner join sub_type on sub.sub_type_id = sub_type.sub_type_id

