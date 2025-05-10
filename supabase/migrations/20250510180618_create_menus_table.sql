create table "public"."menus" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" character varying default ''::character varying
);


alter table "public"."menus" enable row level security;

CREATE UNIQUE INDEX menus_pkey ON public.menus USING btree (id);

alter table "public"."menus" add constraint "menus_pkey" PRIMARY KEY using index "menus_pkey";

grant delete on table "public"."menus" to "anon";

grant insert on table "public"."menus" to "anon";

grant references on table "public"."menus" to "anon";

grant select on table "public"."menus" to "anon";

grant trigger on table "public"."menus" to "anon";

grant truncate on table "public"."menus" to "anon";

grant update on table "public"."menus" to "anon";

grant delete on table "public"."menus" to "authenticated";

grant insert on table "public"."menus" to "authenticated";

grant references on table "public"."menus" to "authenticated";

grant select on table "public"."menus" to "authenticated";

grant trigger on table "public"."menus" to "authenticated";

grant truncate on table "public"."menus" to "authenticated";

grant update on table "public"."menus" to "authenticated";

grant delete on table "public"."menus" to "service_role";

grant insert on table "public"."menus" to "service_role";

grant references on table "public"."menus" to "service_role";

grant select on table "public"."menus" to "service_role";

grant trigger on table "public"."menus" to "service_role";

grant truncate on table "public"."menus" to "service_role";

grant update on table "public"."menus" to "service_role";

create policy "Enable read access for all users"
on "public"."menus"
as permissive
for select
to public
using (true);



