 
--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.6
-- Dumped by pg_dump version 9.5.6

--user
--id
--username
--password



ALTER TABLE IF EXISTS ONLY public.people DROP CONSTRAINT IF EXISTS pk_people_id CASCADE;


DROP TABLE IF EXISTS public.people;
DROP SEQUENCE IF EXISTS public.people_id_seq;
CREATE TABLE people (
    id serial NOT NULL,
    username varchar(50) NOT NULL UNIQUE,
    password text
);

ALTER TABLE ONLY people
    ADD CONSTRAINT pk_people_id PRIMARY KEY (id);