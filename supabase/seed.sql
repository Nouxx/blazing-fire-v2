SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '58a53eba-e0fe-4167-bf86-b04be513be24', '{"action":"user_signedup","actor_id":"b9ec3221-1010-4d8a-852b-3dac2cc85d28","actor_username":"clement.vannouque@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-05-10 18:14:21.612931+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c71f5303-180d-43bf-96cd-e10c068c1993', '{"action":"login","actor_id":"b9ec3221-1010-4d8a-852b-3dac2cc85d28","actor_username":"clement.vannouque@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-05-10 18:14:21.618772+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'b9ec3221-1010-4d8a-852b-3dac2cc85d28', 'authenticated', 'authenticated', 'clement.vannouque@gmail.com', '$2a$10$KUBBXLH.SO5uroIxjxM4teBY7uam4W5/zmcWpUzh7wfJGxr7499vu', '2025-05-10 18:14:21.613575+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-05-10 18:14:21.619169+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "b9ec3221-1010-4d8a-852b-3dac2cc85d28", "email": "clement.vannouque@gmail.com", "email_verified": true, "phone_verified": false}', NULL, '2025-05-10 18:14:21.606763+00', '2025-05-10 18:14:21.621086+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('b9ec3221-1010-4d8a-852b-3dac2cc85d28', 'b9ec3221-1010-4d8a-852b-3dac2cc85d28', '{"sub": "b9ec3221-1010-4d8a-852b-3dac2cc85d28", "email": "clement.vannouque@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-05-10 18:14:21.611236+00', '2025-05-10 18:14:21.61126+00', '2025-05-10 18:14:21.61126+00', 'f98b780d-a7c5-4ae3-9d4f-d630e28fd267');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('67df3fae-fa3b-419f-8b6f-b69d4f656700', 'b9ec3221-1010-4d8a-852b-3dac2cc85d28', '2025-05-10 18:14:21.619228+00', '2025-05-10 18:14:21.619228+00', NULL, 'aal1', NULL, NULL, 'node', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('67df3fae-fa3b-419f-8b6f-b69d4f656700', '2025-05-10 18:14:21.62129+00', '2025-05-10 18:14:21.62129+00', 'password', 'ffd1a564-a7fb-4828-b820-d3668155ef91');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'jpfqjbvy34bw', 'b9ec3221-1010-4d8a-852b-3dac2cc85d28', false, '2025-05-10 18:14:21.62013+00', '2025-05-10 18:14:21.62013+00', NULL, '67df3fae-fa3b-419f-8b6f-b69d4f656700');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: menus; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."menus" ("id", "created_at", "name") VALUES
	('8c452e0c-78c9-42bc-bbe4-14563a63c180', '2025-05-10 18:10:06.553995+00', 'Menu 1');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
