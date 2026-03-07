--
-- PostgreSQL database dump
--

\restrict wO1Cnwrt4vm5vnP7b1DTOIO9MmaHVxaBawyWtwCC7goRo7duS8jj355XVkGFV9s

-- Dumped from database version 18.1 (Homebrew)
-- Dumped by pg_dump version 18.1 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: items; Type: TABLE; Schema: public; Owner: redu
--

CREATE TABLE public.items (
    id integer NOT NULL,
    order_id integer NOT NULL,
    name character varying(50) NOT NULL,
    price integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.items OWNER TO redu;

--
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: redu
--

CREATE SEQUENCE public.items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.items_id_seq OWNER TO redu;

--
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: redu
--

ALTER SEQUENCE public.items_id_seq OWNED BY public.items.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: redu
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer NOT NULL,
    status character varying(50),
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.orders OWNER TO redu;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: redu
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_id_seq OWNER TO redu;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: redu
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: redu
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100),
    useremail character varying(255) NOT NULL,
    phonenumber character varying(20),
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO redu;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: redu
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO redu;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: redu
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: items id; Type: DEFAULT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public.items_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: redu
--

COPY public.items (id, order_id, name, price, quantity) FROM stdin;
1	1	Laptop	1200	1
2	1	Mouse	25	2
3	2	Desk Chair	150	1
4	3	Monitor	300	2
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: redu
--

COPY public.orders (id, user_id, status, created_at) FROM stdin;
1	1	pending	2026-03-07 11:56:28.426521
2	2	shipped	2026-03-07 11:56:28.426521
3	3	delivered	2026-03-07 11:56:28.426521
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: redu
--

COPY public.users (id, username, useremail, phonenumber, created_at) FROM stdin;
1	Redu Davison	redu@example.com	360-555-1234	2026-03-07 11:55:46.410863
2	Shu Wang	shu@example.com	201-555-5678	2026-03-07 11:55:46.410863
3	Andrew Harris	andrew@example.com	303-555-9012	2026-03-07 11:55:46.410863
\.


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: redu
--

SELECT pg_catalog.setval('public.items_id_seq', 4, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: redu
--

SELECT pg_catalog.setval('public.orders_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: redu
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: items items_pkey; Type: CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_useremail_key; Type: CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_useremail_key UNIQUE (useremail);


--
-- Name: items items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict wO1Cnwrt4vm5vnP7b1DTOIO9MmaHVxaBawyWtwCC7goRo7duS8jj355XVkGFV9s

